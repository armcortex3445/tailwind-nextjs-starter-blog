interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '고전 작품 퀴즈 서비스',
    description: `예술적인 작품들을 감상하는 것 뿐만 아니라, 퀴즈 컨텐츠로써 즐깁니다.`,
    imgSrc: '/static/images/project/quiz.png',
    href: 'https://port-0-ggrim-front-m4i5o7t86f50fb45.sel4.cloudtype.app/',
  },
]

export default projectsData
