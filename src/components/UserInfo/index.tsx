/*
 * @Date: 2025-07-09 11:22:00
 * @LastEditors: cmy && 1732728869@qq.com
 * @LastEditTime: 2025-07-28 16:53:37
 * @FilePath: \susie-cmy\src\components\UserInfo\index.tsx
 * @Description: 强者都是孤独的
 */
"use client";
import { useEffect } from "react";
import { utils, createTimeline, animate } from "animejs";
import Image from 'next/image'
import GradientText from "@/components/Animation/web/UserColorful"
import ProfileImage from './cmy.jpg'
const UserInfoPage = () => {
  const positionName = "WEB前端开发";
  const workExperience = "嘿嘿";
  const cmyAge = "呜呜";
  useEffect(() => {
    const positionRef = utils.$(".cmy-positionRef");
    animate(positionRef, {
      opacity: [0, 0, 1],
      loop: false,
      alternate: true,
    })

    const workExperienceRef = utils.$(".cmy-workExperienceRef");
    const cmyAgeRef = utils.$(".cmy-ageRef");
    const tl = createTimeline({ defaults: { duration: 750 } });
    const circleAnimation = animate(cmyAgeRef, {
      rotate: {
        from: '-1turn',
        delay: 0
      },
    });
    tl.label('start')
      .add(workExperienceRef, {
        scale: [
          { to: 0, ease: 'outExpo', duration: 600 },
          { to: 1, ease: 'outBounce', duration: 800, delay: 100 }
        ]
      }, 300)
      .sync(circleAnimation, 450)
  }, []);
  return (
    <div className="cmy-stats cmy-shadow w-full cmy-stats-vertical md:!cmy-stats-horizontal lg:flex min-w-screen-xl md:grid md:grid-cols-1" data-tip="chenmuyu">
      <div className="cmy-stat">
        <div className="cmy-stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div className="cmy-stat-title">职位</div>
        <div className="cmy-stat-value text-primary">
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={8}
            showBorder={false}
            className="custom-class"
          >
            {positionName}
          </GradientText>
        </div>
        <div className="cmy-stat-desc">Base 长沙</div>
      </div>

      <div className="cmy-stat">
        <div className="cmy-stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div className="cmy-stat-title">工作年限</div>
        <div className="cmy-stat-value text-secondary cmy-workExperienceRef">{workExperience}</div>
        <div className="cmy-stat-desc">嘿嘿</div>
      </div>

      <div className="cmy-stat">
        <div className="cmy-stat-figure text-secondary">
          <div className="cmy-avatar cmy-avatar-online">
            <div className="w-16 rounded-full">
              <Image alt="chenmuyu" src={ProfileImage} />
            </div>
          </div>
        </div>
        <div className="cmy-stat-title">年龄</div>
        <div className="cmy-stat-value">{
          Array.from(cmyAge).map((char, idx) => (
            <span
              className="inline-block cmy-ageRef"
              key={idx}
            >
              {char}
            </span>
          ))
        }</div>
        {/* <div className="cmy-stat-title">Tasks done</div> */}
        {/* <div className="cmy-stat-desc text-secondary">31 tasks remaining</div> */}
      </div>
    </div>
  );
};

export default UserInfoPage;
