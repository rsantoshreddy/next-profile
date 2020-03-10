export const homeModel = {
  heroBanner: {
    className: 'dark',
    heading: 'Welcome to Price',
    quote: 'The institute for software education',
    backgroundImage: './static/images/hero-banners/education.jpg'
  },
  panel: {
    heading: 'Price Courses',
    paragraph:
      'According to industry prerequisites our talent groups need to be well groomed in IT knowledge and must be equipped with up todate technologies. Our institute provides various courses by the well trained and highly experienced faculty.',
    items: [
      {
        image: './static/images/thumbs/diploma-2.png',
        title: 'DCA',
        description: 'Topics include DOS, Windows, Word, Excell and More..'
      },
      {
        image: './static/images/thumbs/degree-512.png',
        title: 'PGDCA',
        description: 'Topics include DOS, Windows, Word, Excell and More..'
      }
    ]
  },

  testimonial: {
    heading: "Director's message",
    image: './static/images/thumbs/malaya.png',
    paragraph:
      'Price provides courses starting from the fundamentals to the most advanced and latest technologies with most experience trainers, with live projects on all courses. According to industry prerequisites our talent groups need to be well groomed in IT knowledge and most be equipped with up todate technologies. Price has trained more than 3 thousand of students who are placed with handsome package in various companies and it industries from last 7 years.'
  },
  achivements: {
    backgroundImage: './static/images/backgrounds/counter-bg.png',
    items: [
      {
        icon: 'fa fa-book',
        value: '500',
        title: 'Classes Completed'
      },
      {
        icon: 'fa fa-users',
        value: '5000',
        title: 'Students Enrolled'
      },
      {
        icon: 'fa fa-user',
        value: '300',
        title: 'Certified Teachers'
      }
    ]
  }
};
