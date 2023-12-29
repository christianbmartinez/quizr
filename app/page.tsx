import frameWorkQuizzes from '@/constants/quizzes/frameworks'

import { Hero } from '@/components/hero'
import { Quizzes } from '@/components/quizzes'

export default function LandingPage() {
  return (
    <>
      <Hero
        links={true}
        description='How well do you know modern web technologies? Put your skills to the test with our timed, multiple choice qwizzes and earn your spot on the leaderboard.'
      />
      <Quizzes quizData={frameWorkQuizzes} />
    </>
  )
}
