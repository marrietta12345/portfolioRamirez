# Professional React Portfolio

A modern, responsive portfolio website built with React.js, featuring smooth animations, professional design, and user-friendly interface.

## Features

✨ **Professional Design**
- Clean and modern aesthetic with a dark theme
- Gradient accents and smooth color transitions
- Fully responsive design for all device sizes

🎨 **Smooth Animations**
- Framer Motion animations for interactive elements
- Staggered animations for project cards
- Scroll-based reveal animations
- Hover effects on interactive components

📱 **User-Friendly Interface**
- Intuitive navigation with smooth scrolling
- Mobile-responsive navigation menu
- Clear call-to-action buttons
- Contact form with validation

🚀 **Key Sections**
- **Hero Section**: Eye-catching introduction with animated greeting
- **About**: Personal information and key statistics
- **Projects**: Showcase of featured projects with tags and links
- **Skills**: Categorized skills with proficiency bars
- **Contact**: Contact form and social media links
- **Footer**: Quick navigation and back-to-top button

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install Lucide icons (for icons used in components):
```bash
npm install lucide-react
```

## Development

Start the development server:
```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173`

## Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Customization

### Personal Information
- Update the hero section heading and description in `src/components/Hero.tsx`
- Modify "About Me" content in `src/components/About.tsx`
- Update statistics and profile information

### Projects
- Edit project data in `src/components/Projects.tsx`
- Add your project links, descriptions, and technologies
- Replace placeholder with actual project images

### Skills
- Update skill categories in `src/components/Skills.tsx`
- Modify proficiency percentages
- Add or remove skill categories

### Contact
- Update email address in `src/components/Contact.tsx`
- Add your social media links (GitHub, LinkedIn, etc.)
- Customize contact information

### Styling
- Modify colors in `tailwind.config.js`
- Adjust animations in component files using Framer Motion props
- Customize global styles in `src/index.css`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build: `npm run build`
2. Publish: `dist` folder
3. Deploy through Netlify Dashboard

### GitHub Pages
1. Update `vite.config.ts` with your repository name
2. Run `npm run build`
3. Deploy the `dist` folder

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images and assets
- Code splitting with Vite
- Smooth animations optimized for 60fps
- Mobile-first responsive design

## License

This project is open source and available under the MIT License.

## Author

Your Name - [Your Website/Portfolio]

## Support

For issues, questions, or suggestions, please open an issue or contact me directly.

---

**Made with ❤️ using React, Tailwind CSS, and Framer Motion**
