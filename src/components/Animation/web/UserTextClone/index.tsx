/*
 * @Author: Susie 1732728869@qq.com
 * @Date: 2025-08-19 21:50:13
 * @LastEditors: Susie 1732728869@qq.com
 * @LastEditTime: 2025-08-19 22:16:26
 * @FilePath: \susie-cmy\src\components\Animation\web\UserTextClone\index.tsx
 * @Description: 强者都是孤独的
 * 
 * Copyright (c) 2025 by 1732728869@qq.com, All Rights Reserved. 
 */
"use client";
import { createTimeline, stagger, text } from 'animejs';
import { useEffect } from "react";

export default function UserTextClone({ propsText }: { propsText: string }) {
  useEffect(() => {
    const { chars } = text.split('p', {
      chars: {
        wrap: 'clip',
        clone: 'bottom'
      },
    });
    createTimeline()
      .add(chars, {
        y: '-100%',
        loop: true,
        loopDelay: 350,
        duration: 750,
        ease: 'inOut(2)',
      }, stagger(150, { from: 'center' }));
  })

  return (
    <div>
      <div className="large centered row">
        <p className="textp">{propsText}</p>
      </div>
      <div className="small row"></div>
    </div>
  )
}
