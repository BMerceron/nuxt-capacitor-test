# Nuxt Minimal Starter

Explore the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Prerequisites

Before starting, make sure you have installed:

- **[Node.js](https://nodejs.org/)** (v16+ recommended)
- **npm** (comes with Node.js)
- **[Android Studio](https://developer.android.com/studio)** (for Android builds)
- **[Xcode](https://developer.apple.com/xcode/)** (for iOS builds, macOS only)

## Installation

Install the required dependencies:

```bash
npm install
```

## Development

Start the development server at `http://localhost:3000`:

```bash
npm run dev
```

## Web Production

Build the application for web production (SSR):

```bash
# Builds the web version (output in .output without index.html for SSR)
npm run build:web
```

To preview the production build locally:

```bash
npm run preview
```

## Mobile Production

Build the application for mobile production (PWA encapsulated):

1. **Generate the mobile build**:
   ```bash
   # Generates a static version (dist with index.html for mobile)
   npm run build:mobile
   ```

2. **Add the Android platform**:
   ```bash
   npx cap add android
   ```

3. **Copy the build files to Capacitor**:
   ```bash
   npx cap copy
   ```

4. **Open the Android project in Android Studio**:
   ```bash
   npx cap open android
   ```

### Troubleshooting

If the command `npx cap open android` cannot find Android Studio, manually set the executable path:

```bash
export CAPACITOR_ANDROID_STUDIO_PATH="/opt/android-studio/bin/studio.sh"
```

## Deployment

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information on deploying your application.
