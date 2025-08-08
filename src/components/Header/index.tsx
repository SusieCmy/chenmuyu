
/*
 * @Date: 2025-07-07 11:06:51
 * @LastEditors: cmy && 1732728869@qq.com
 * @LastEditTime: 2025-07-29 11:46:17
 * @FilePath: \susie-cmy\src\components\Animation\web\Header\index.tsx
 * @Description: 强者都是孤独的
 */

"use client"
import Link from "next/link"
import { animate, utils, svg, stagger } from "animejs";
import { useEffect } from "react";
import useThemeStore from "@/store/useThemeStore"

export default function Header() {
  const { setThemeType, themeType } = useThemeStore()
  useEffect(() => {
    setTimeout(() => {
      animate(svg.createDrawable('.line'), {
        draw: ['0 0', '0 1', '1 1'],
        ease: 'inOutQuad',
        duration: 2000,
        delay: stagger(100),
        loop: true
      });
    }, 1000);
    const scope = utils.$('.headerNameRef')
    animate(scope, {
      y: [
        { to: '-2.75rem', ease: 'outExpo', duration: 600 },
        { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
      ],
      rotate: {
        from: '-1turn',
        delay: 0
      },
      delay: (_, i) => i * 50,
      ease: 'inOutCirc',
      loopDelay: 1000,
      loop: false
    });
  }, []);
  useEffect(() => {
    const scopeTextRef = utils.$('.menuTextRef')
    animate(scopeTextRef, {
      x: [
        { to: '10rem', duration: 0 },
        { to: 0, easing: 'easeOutBounce', duration: 1000 }
      ],
      rotate: [
        { to: '180deg', duration: 0 },
        { to: '0deg', easing: 'easeOutBack', duration: 800, delay: 100 }
      ],
      opacity: [
        { to: 0, duration: 0 },
        { to: 1, easing: 'easeOutQuad', duration: 500, delay: 150 }
      ],
      scale: [
        { to: 0.3, duration: 0 },
        { to: 1, easing: 'easeOutElastic', duration: 1200, delay: 50 }
      ],
      delay: (_, i) => i * 80,
      easing: 'easeInOutCirc'
    });
  }, []);

  const handleTheme = () => {
    setThemeType(themeType === 'light' ? 'dark' : 'light')
  }
  return (
    <div className="border-2 h-16 border-solid cmy-header-border max-w-screen-md rounded-full p-2 mx-auto shadow-sm backdrop-blur-md flex  items-center">
      {/* <div className="h-12"> */}
      {/* <div className="text-2xl uppercase z-50 !border-none"> */}

      <div className="flex flex-1 items-center h-full">
        {/* <div className='relative h-full w-20'> */}
        <Link href={'/'} title="陈慕宇">
          <div className='absolute top-3 left-0 w-48'>
            <svg viewBox="0 0 500 100">
              <g stroke="#fff" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8">
                {/* <!-- C --> */}
                <path className="line1" d="M40 30 Q20 30 20 50 Q20 70 40 70" />

                {/* <!-- H --> */}
                <path className="line1" d="M60 30 L60 70" />
                <path className="line1" d="M80 30 L80 70" />
                <path className="line1" d="M60 50 L80 50" />

                {/* <!-- E --> */}
                <path className="line1" d="M100 30 L100 70" />
                <path className="line1" d="M100 30 L120 30" />
                <path className="line1" d="M100 50 L115 50" />
                <path className="line1" d="M100 70 L120 70" />

                {/* <!-- N --> */}
                <path className="line1" d="M140 30 L140 70" />
                <path className="line1" d="M160 30 L160 70" />
                <path className="line1" d="M140 30 L160 70" />

                {/* <!-- M --> */}
                <path className="line1" d="M180 70 L180 30" />
                <path className="line1" d="M180 30 L190 40 L200 30" />
                <path className="line1" d="M200 30 L200 70" />

                {/* <!-- U --> */}
                <path className="line1" d="M220 30 L220 60 Q220 70 230 70 Q240 70 240 60 L240 30" />

                {/* <!-- Y --> */}
                <path className="line1" d="M260 30 L270 50" />
                <path className="line1" d="M280 30 L270 50" />
                <path className="line1" d="M270 50 L270 70" />

                {/* <!-- U --> */}
                <path className="line1" d="M300 30 L300 60 Q300 70 310 70 Q320 70 320 60 L320 30" />
              </g>
            </svg>
          </div>
          <div className='absolute top-3 left-0 w-48'>
            <svg viewBox="0 0 500 100">
              <g stroke="#3b82f6" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8">
                <path className="line" d="M40 30 Q20 30 20 50 Q20 70 40 70" />

                <path className="line" d="M60 30 L60 70" />
                <path className="line" d="M80 30 L80 70" />
                <path className="line" d="M60 50 L80 50" />

                <path className="line" d="M100 30 L100 70" />
                <path className="line" d="M100 30 L120 30" />
                <path className="line" d="M100 50 L115 50" />
                <path className="line" d="M100 70 L120 70" />

                <path className="line" d="M140 30 L140 70" />
                <path className="line" d="M160 30 L160 70" />
                <path className="line" d="M140 30 L160 70" />

                <path className="line" d="M180 70 L180 30" />
                <path className="line" d="M180 30 L190 40 L200 30" />
                <path className="line" d="M200 30 L200 70" />

                <path className="line" d="M220 30 L220 60 Q220 70 230 70 Q240 70 240 60 L240 30" />

                <path className="line" d="M260 30 L270 50" />
                <path className="line" d="M280 30 L270 50" />
                <path className="line" d="M270 50 L270 70" />

                <path className="line" d="M300 30 L300 60 Q300 70 310 70 Q320 70 320 60 L320 30" />
              </g>
            </svg>
          </div>
        </Link>

        {/* </div> */}
        <div className="ml-10">
          {/* {menuList()} */}
        </div>
      </div>
      <div className="flex-none">
        <label className="cmy-swap cmy-swap-rotate">
          <input type="checkbox" value="synthwave" className="cmy-theme-controller" onChange={handleTheme} />
          {/* sun icon */}
          <svg
            className="cmy-swap-off h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="cmy-swap-on h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        {/* <button className="cmy-btn cmy-btn-square cmy-btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
          </button> */}
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  )
} 