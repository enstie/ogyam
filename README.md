# Ogyam - Rcc Youth Ministry Website

A modern, responsive React website for Rcc Youth Ministry located in Asylum Down. This website features a welcoming design, information about the ministry, and a comprehensive registration form for events and activities.

## Features

- **Modern Design**: Clean, professional UI with smooth animations and transitions
- **Responsive Layout**: Fully mobile-friendly and works on all device sizes
- **Hero Section**: Eye-catching welcome banner with customizable background image
- **About Section**: Information about the ministry's mission, community, and activities
- **Registration Form**: Complete form with validation for:
  - Full Name (required)
  - Email Address (required with validation)
  - Phone Number (required)
  - Number of Guests (required, numeric input)
  - Special Note (optional textarea)
- **Form Validation**: Real-time validation with helpful error messages
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support
- **Loading States**: Visual feedback during form submission
- **Success/Error Messages**: Clear feedback for form submission status

## Tech Stack

- **React 18.2**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **CSS3**: Modern styling with animations and responsive design
- **ESLint**: Code quality and consistency

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/enstie/ogyam.git
cd ogyam
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Linting

Check code quality:
```bash
npm run lint
```

## Customization

### Changing the Background Image

To replace the background image in the Hero section:

1. Add your image to the `public` folder (e.g., `public/background.jpg`)
2. Edit `src/components/Hero.css`
3. Update the `background-image` URL in the `.hero` class:

```css
.hero {
  background-image: url('/background.jpg');
  /* ... */
}
```

### Updating Content

- **Church Information**: Edit `src/components/Hero.jsx` and `src/components/Footer.jsx`
- **About Section**: Edit `src/components/About.jsx`
- **Form Fields**: Modify `src/components/RegistrationForm.jsx`

### Styling

All styles are in separate CSS files for easy customization:
- Global styles: `src/index.css`
- Hero section: `src/components/Hero.css`
- About section: `src/components/About.css`
- Registration form: `src/components/RegistrationForm.css`
- Footer: `src/components/Footer.css`

## Form Submission

The form currently logs data to the console. To integrate with a backend:

1. Open `src/components/RegistrationForm.jsx`
2. Find the `handleSubmit` function
3. Replace the simulated API call with your actual backend endpoint:

```javascript
const response = await fetch('YOUR_API_ENDPOINT', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
```

## Project Structure

```
ogyam/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── RegistrationForm.jsx
│   │   ├── RegistrationForm.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx          # Main App component
│   ├── App.css
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── .eslintrc.cjs        # ESLint configuration
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

Rcc Youth Ministry - Asylum Down, Accra, Ghana

For questions or support, please contact: info@rccyouth.org

---

Built with ❤️ for Rcc Youth Ministry