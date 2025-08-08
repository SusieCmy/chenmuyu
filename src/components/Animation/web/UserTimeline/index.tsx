/*
 * @Date: 2025-07-17 11:22:23
 * @LastEditors: cmy && 1732728869@qq.com
 * @LastEditTime: 2025-07-29 11:43:13
 * @FilePath: \susie-cmy\src\components\Animation\web\UserTimeline\index.tsx
 * @Description: 强者都是孤独的
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
      scale: [1, .5, 1]
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
      <div className="">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-1 backdrop-blur-md"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 backdrop-blur-md"></div>
          <div className="absolute top-0 left-0 h-full w-1 backdrop-blur-md"></div>
          <div className="absolute top-0 right-0 h-full w-1 backdrop-blur-md"></div>
          <div className="p-1">
            <video ref={homeVideoRef} src={`./${videoSrc}.mp4`} className="w-auto" autoPlay loop muted></video>
          </div>
        </div>
      </div>
      <div className="h-[400lvh] relative cmy-scroll-container">
        <div className="sticky left-0 top-1/12 h-[90lvh]">
          <progress className="cmy-progress cmy-progress-accent absolute left-0 bottom-0" value={prevProgress * 100} max="100"></progress>
          <div className="cmy-timeline mt-4 w-20 h-20 text-sm bg-gray-600">
          </div>
        </div>
      </div>
    </div>
  )
}



