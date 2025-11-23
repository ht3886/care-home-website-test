# Broadway Care Homes Website

A modern, responsive website for Broadway Care Homes located in Saskatoon, SK. Built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Contact form with EmailJS integration
- Modern UI with smooth animations
- Sections for About, Services, Facilities, and Contact
- Email and phone contact options

## Prerequisites

Before you begin, make sure you have the following installed:
- Node.js (version 16 or higher)
- npm (comes with Node.js)

## Getting Started

### 1. Install Dependencies

Open a terminal in the project directory and run:

```bash
npm install
```

### 2. Configure EmailJS (Required for Contact Form)

The contact form uses EmailJS to send messages. You need to set up a free EmailJS account:

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `{{from_name}}` - sender's name
   - `{{from_email}}` - sender's email
   - `{{phone}}` - sender's phone (optional)
   - `{{message}}` - the message content
4. Get your credentials:
   - Service ID
   - Template ID
   - Public Key

5. Create a `.env` file in the root directory and add your credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Important:** Never commit the `.env` file to version control. It's already included in `.gitignore`.

### 3. Run the Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 4. Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates optimized files in the `dist` folder that you can upload to any web hosting service.

## Project Structure

```
project/
├── public/              # Static assets (images, etc.)
├── src/
│   ├── components/      # React components
│   │   ├── About.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Facilities.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── Services.tsx
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── .env                # Environment variables (create this)
├── package.json        # Project dependencies
└── README.md          # This file
```

## Customization

### Updating Content

- **Hero Section**: Edit `src/components/Hero.tsx`
- **About Section**: Edit `src/components/About.tsx`
- **Services**: Edit `src/components/Services.tsx`
- **Facilities**: Edit `src/components/Facilities.tsx`
- **Contact Info**: Edit `src/components/ContactForm.tsx` and `src/components/Footer.tsx`

### Changing Colors

The project uses Tailwind CSS. Main colors are defined in the code:
- Primary: Teal (teal-500, teal-600)
- Secondary: Slate (slate-600, slate-700, slate-800)
- Accent: Cream tones

To change colors globally, search and replace color class names throughout the components.

### Adding Images

Place images in the `public` folder and reference them in your components:

```tsx
<img src="/your-image.jpg" alt="Description" />
```

## Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add your environment variables in Vercel's settings
5. Deploy

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Add your environment variables in Netlify's settings
7. Deploy

### Option 3: Traditional Web Hosting

1. Run `npm run build`
2. Upload the contents of the `dist` folder to your web hosting
3. Make sure your hosting supports single-page applications (may need to configure redirects)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Check code for errors
- `npm run typecheck` - Check TypeScript types

## Troubleshooting

### Contact form not sending emails

1. Verify your EmailJS credentials in `.env`
2. Check that the `.env` file variable names start with `VITE_`
3. Restart the development server after changing `.env`
4. Check browser console for errors

### Build errors

1. Delete `node_modules` folder and `package-lock.json`
2. Run `npm install` again
3. Run `npm run build`

## Support

For questions or issues, contact:
- Email: info@broadwaycare.ca
- Phone: (306) 979-8468

## License

This is a proprietary project for Broadway Care Homes.
