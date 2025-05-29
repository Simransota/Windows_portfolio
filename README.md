# Windows 11 Portfolio

A personal portfolio website built with Next.js that mimics the Windows 11 interface. Experience my portfolio through a familiar operating system UI!



## 🚀 Features

- **Windows 11 UI** - Authentic Windows 11 look and feel
- **File Explorer** - Browse projects, pictures, and documents
- **Notepad** - Read about me through a classic notepad interface
- **Terminal** - Interactive command line interface
- **Dynamic Windows** - Draggable and resizable windows
- **Cloudinary Integration** - Dynamic image management
- **Responsive Design** - Works on desktop and tablet devices

## 🛠️ Built With

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Cloudinary](https://cloudinary.com/)
- [Framer Motion](https://www.framer.com/motion/)

## 🏃‍♂️ Running Locally

1. Clone the repository:
```bash
git clone https://github.com/yourusername/windows11-portfolio.git
```

2. Install dependencies:
```bash
cd windows11-portfolio
npm install
```

3. Create a `.env.local` file in the root directory with your Cloudinary credentials:
```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── components/
│   ├── layouts/
│   ├── modules/
│   ├── utils/
│   └── windows/
├── pages/
│   ├── explorer/
│   ├── notepad/
│   └── terminal.tsx
├── public/
│   ├── fonts/
│   ├── icons/
│   └── images/
├── styles/
└── context/
```

## 🎨 Features & Components

- **File Explorer**: Browse through different sections of the portfolio
- **Notepad**: View text content in a classic Notepad interface
- **Terminal**: Execute commands in a terminal emulator
- **Image Gallery**: View images with Cloudinary integration
- **Project Showcase**: Display GitHub repositories
- **Draggable Windows**: Windows-like window management
- **Context Menus**: Right-click context menus
- **System Icons**: Windows 11 style icons and UI elements

## 📝 Environment Variables

Required environment variables:

```env
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

## 🌟 Acknowledgments

- Inspired by Windows 11 UI
- Icons from Windows 11
- React-RnD for window management
- Next.js team for the amazing framework

