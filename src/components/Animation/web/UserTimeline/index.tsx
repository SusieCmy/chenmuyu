/*
 * @Author: Susie 1732728869@qq.com
 * @Date: 2025-08-08 21:09:39
 * @LastEditors: Susie 1732728869@qq.com
 * @LastEditTime: 2025-08-19 22:17:03
 * @FilePath: \susie-cmy\src\components\Animation\web\UserTimeline\index.tsx
 * @Description: 强者都是孤独的
 * 
 * Copyright (c) 2025 by 1732728869@qq.com, All Rights Reserved. 
 */

'use client';
import { utils, onScroll, animate } from 'animejs';
import { useEffect, useState } from "react";
export default function UserTimeline() {
  const [prevProgress, setPrevProgress] = useState<number>(0)

  useEffect(() => {
    const containers = utils.$(".cmy-scroll-container");
    const timelines = utils.$('.cmy-timeline');
    const cardsAnimation = animate(timelines, {
      scale: [1, 0.5, 10]
    });

    onScroll({
      target: containers,
      enter: 'top',
      leave: 'bottom',
      // debug: true,
      sync: .1,
      onUpdate: (e) => {
        setPrevProgress(e.prevProgress)
      }
    }).link(cardsAnimation)

    return () => {
      cardsAnimation?.pause()
    }
  }, []);
  return (
    <div className="">
      <div className="h-[400lvh] relative cmy-scroll-container">
        <div className="sticky left-0 top-1/12 h-[90lvh]">
          <progress className="w-[83lvh] cmy-progress cmy-progress-accent absolute left-0 top-0 transform rotate-90 origin-left" value={prevProgress * 100} max="100"></progress>
        </div>
      </div>
    </div>
  )
}



