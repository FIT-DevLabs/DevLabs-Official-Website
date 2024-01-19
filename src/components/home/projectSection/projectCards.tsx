"use client";

import React from "react";
import styles from "@/styles/BlogCard.module.css";
import useFetch from "./useFetch";
import "@/styles/hideScrollbar.css";
import Projects from "@/content/projects.json"

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

function ProjectCard() {
  const { dragStart, dragStop, dragMove } = useDrag();

  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

//   const { items, loading, error } = useFetch(
//     "http://localhost:1337/api/blogs?populate=*"
//   );

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error!</p>;
//   console.log(items);
  return (
    <div>
      <div className={styles.example_2}>
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
            {Projects.projects.map(
              (project: {
                id: number;
                name:string;
                description:string;
                url:string;
                    }
              ) => (
                <Card
                  name={project.name}
                  key={project.id}
                  Id={project.id}
                  description={project.description}
                  url={
                    project.url
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

export default ProjectCard;

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