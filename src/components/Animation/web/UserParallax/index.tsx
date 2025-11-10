/*
 * @Date: 2025-07-17 11:22:23
 * @LastEditors: cmy && 1732728869@qq.com
 * @LastEditTime: 2025-07-24 10:50:24
 * @FilePath: \susie-cmy\src\components\Animation\UserParallax\index.tsx
 * @Description: 强者都是孤独的
 */
"use client";
import { utils, onScroll, animate } from 'animejs';
import { useEffect, useState } from "react";
export default function UserTimeline() {
  const [prevProgress, setPrevProgress] = useState<number>(0)
  useEffect(() => {
    // 确保在客户端运行
    if (typeof window === 'undefined') return;

    const containers = utils.$(".cmy-scroll-container1");
    const timelines = utils.$('.cmy-timeline');
    
    // 检查元素是否存在
    if (!containers || containers.length === 0) return;
    if (!timelines || timelines.length === 0) return;

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
      <div className="h-[400lvh] relative cmy-scroll-container1">
        <div className="sticky left-0 top-1/12 h-[90lvh]">
          <progress className="cmy-progress cmy-progress-accent absolute left-0 bottom-0" value={prevProgress * 100} max="100"></progress>
        </div>
      </div>
    </div>
  )
}



