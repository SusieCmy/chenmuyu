/*
 * @Date: 2025-07-25 14:15:46
 * @LastEditors: cmy && 1732728869@qq.com
 * @LastEditTime: 2025-07-25 14:32:26
 * @FilePath: \susie-cmy\src\app\not-found.tsx
 * @Description: 强者都是孤独的
 */
import FuzzyText from '@/components/Animation/web/UserNotFound'

export default function NotFoundPage() {
  return (
    <div className='w-full h-[73lvh] relative'>
      <div className='absolute inset-0 flex items-center justify-center'>
        <FuzzyText
          baseIntensity={0.2}
          hoverIntensity={0.3}
          enableHover={true}
        >
          404
        </FuzzyText>
      </div>
    </div>
  )
}