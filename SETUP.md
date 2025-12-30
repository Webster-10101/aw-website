# Setup Guide

## Fixing "Too many open files" Error on macOS

If you see `EMFILE: too many open files` when running the dev server, you need to increase your system's file limit.

### Quick Fix (temporary, until you restart your terminal):

```bash
ulimit -n 10240
```

### Permanent Fix:

1. Create/edit the file `/Library/LaunchDaemons/limit.maxfiles.plist` (requires sudo):

```bash
sudo nano /Library/LaunchDaemons/limit.maxfiles.plist
```

2. Add this content:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>Label</key>
    <string>limit.maxfiles</string>
    <key>ProgramArguments</key>
    <array>
      <string>launchctl</string>
      <string>limit</string>
      <string>maxfiles</string>
      <string>65536</string>
      <string>200000</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>ServiceIPC</key>
    <false/>
  </dict>
</plist>
```

3. Set permissions and load:

```bash
sudo chown root:wheel /Library/LaunchDaemons/limit.maxfiles.plist
sudo chmod 644 /Library/LaunchDaemons/limit.maxfiles.plist
sudo launchctl load -w /Library/LaunchDaemons/limit.maxfiles.plist
```

4. Restart your terminal

## Running the Site

After fixing the file limit issue:

```bash
# Install dependencies (if not already done)
npm install

# Run development server
npm run dev
```

Visit http://localhost:3000

## Building for Production

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Connect your domain in the Vercel dashboard

