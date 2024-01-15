"use client";

import React from "react";
import styles from "@/styles/BlogCard.module.css";
import useFetch from "./useFetch";
import "../../styles/hideScrollbar.css";

import {
  ScrollMenu,
  VisibilityContext,
  getItemsPos,
  slidingWindow,
} from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import useDrag from "./useDrag";
import Card from "./Card";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

function BlogCard() {
  const { dragStart, dragStop, dragMove } = useDrag();

  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const { items, loading, error } = useFetch(
    "http://localhost:1337/api/blogs?populate=*"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  console.log(items);
  return (
    <div>
      <div className={styles.example}>
        <div>
          <ScrollMenu
            onWheel={onWheel}
            onMouseDown={() => dragStart}
            onMouseUp={({
                getItemById,
                scrollToItem,
                visibleItems,
              }: scrollVisibilityApiType) =>
              () => {
                dragStop();
                const { center } = getItemsPos(visibleItems);
                scrollToItem(getItemById(center), "smooth", "center");
              }}
            options={{ throttle: 0 }}
            onMouseMove={handleDrag}
          >
            {items.map(
              (blog: {
                id: number;
                attributes: {
                  title: string;
                  date: string;
                  owner: string;
                  image: {
                    data: {
                      attributes: {
                        formats: {
                          thumbnail: {
                            url: URL;
                          };
                        };
                      };
                    };
                  };
                };
              }) => (
                <Card
                  title={blog.attributes.title}
                  date={blog.attributes.date}
                  key={blog.id}
                  owner={blog.attributes.owner}
                  Id={blog.id}
                  url={
                    blog.attributes.image.data.attributes.formats.thumbnail.url
                  }
                />
              )
            )}
          </ScrollMenu>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

function onWheel(
  { getItemById, items, visibleItems, scrollToItem }: scrollVisibilityApiType,
  ev: React.WheelEvent
): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    const nextGroupItems = slidingWindow(
      items.toItemsKeys(),
      visibleItems
    ).next();
    const { center } = getItemsPos(nextGroupItems);
    scrollToItem(getItemById(center), "smooth", "center");
  } else if (ev.deltaY > 0) {
    const prevGroupItems = slidingWindow(
      items.toItemsKeys(),
      visibleItems
    ).prev();
    const { center } = getItemsPos(prevGroupItems);
    scrollToItem(getItemById(center), "smooth", "center");
  }
}
