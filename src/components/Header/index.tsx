
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
// import useThemeStore from "@/store/useThemeStore"

export default function Header() {
  // const { setThemeType, themeType } = useThemeStore()
  useEffect(() => {
    // 确保在客户端运行
    if (typeof window === 'undefined') return;

    setTimeout(() => {
      const lineElements = svg.createDrawable('.line');
      if (lineElements && lineElements.length > 0) {
        animate(lineElements, {
          draw: ['0 0', '0 1', '1 1'],
          ease: 'inOutQuad',
          duration: 2000,
          delay: stagger(100),
          loop: true
        });
      }
    }, 1000);
    
    const scope = utils.$('.headerNameRef');
    if (scope && scope.length > 0) {
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
    }
  }, []);
  useEffect(() => {
    // 确保在客户端运行
    if (typeof window === 'undefined') return;

    const scopeTextRef = utils.$('.menuTextRef');
    if (scopeTextRef && scopeTextRef.length > 0) {
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
    }
  }, []);

  // const handleTheme = () => {
  //   setThemeType(themeType === 'light' ? 'dark' : 'light')
  // }
  return (
    <div className="border-2 h-16 border-solid cmy-header-border max-w-screen-md rounded-full p-2 mx-auto shadow-sm backdrop-blur-md flex  items-center">
      <div className="flex flex-1 items-center h-full">
        <Link href={'/'} title="chenmuyu">
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

        <div className="ml-10">
        </div>
      </div>
    </div>
  )
} 