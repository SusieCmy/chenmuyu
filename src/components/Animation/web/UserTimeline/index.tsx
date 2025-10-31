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

"use client";
import { utils, onScroll, animate } from 'animejs';
import { useEffect, useRef, useState, useMemo } from "react";
import useThemeStore from "@/store/useThemeStore"
export default function UserTimeline() {
  const [prevProgress, setPrevProgress] = useState<number>(0)
  const homeVideoRef = useRef(null!)
  const { themeType } = useThemeStore()
  const videoSrc = useMemo(() =>
    themeType === 'dark' ? './ye1' : './hua1',
    [themeType]
  )

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
      // 清理动画实例，防止内存泄漏
      cardsAnimation?.pause()
    }
  }, []);
  return (
    <div className="">
      {/* <div className="">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-1 backdrop-blur-md"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 backdrop-blur-md"></div>
          <div className="absolute top-0 left-0 h-full w-1 backdrop-blur-md"></div>
          <div className="absolute top-0 right-0 h-full w-1 backdrop-blur-md"></div>
          <div className="p-1">
            <video ref={homeVideoRef} src={`./${videoSrc}.mp4`} className="w-auto" autoPlay loop muted></video>
          </div>
        </div>
      </div> */}
      <div className="h-[400lvh] relative cmy-scroll-container">
        <div className="sticky left-0 top-1/12 h-[90lvh]">
          <progress className="w-[83lvh] cmy-progress cmy-progress-accent absolute left-0 top-0 transform rotate-90 origin-left" value={prevProgress * 100} max="100"></progress>
          {/* <div className="cmy-timeline mt-4 w-full h-[50lvh] text-sm bg-gray-600">
          </div> */}
        </div>
      </div>
    </div>
  )
}



