/* eslint-env node */
import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge'
}

const font = fetch(new URL('./Inter-SemiBold.otf', import.meta.url)).then(res =>
  res.arrayBuffer()
)

export default async function (req) {
  const inter = await font

  const { searchParams } = new URL(req.url)

  // ?title=<title>
  const hasTitle = searchParams.has('title')
  const title = hasTitle
    ? searchParams.get('title')?.slice(0, 100)
    : 'Thrust Network Documentation'

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: 80,
          position: 'relative',
          backgroundColor: '#1e1c22',
          backgroundPosition: '-30px -10px',
          fontWeight: 600,
          color: 'white'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("https://api.thrust.network/storage/v1/object/public/thrust/app/cross-pattern-card3.png")',
            opacity: 0.1,
            backgroundSize: '100px 100px',
            backgroundPosition: '-30px -10px',
            zIndex: 1, // Below the gradient
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom right, #1e1c22, transparent)', // Gradient from #030303 to transparent
            zIndex: 20000, // Above the image
          }}
        />
        <img src="https://api.thrust.network/storage/v1/object/public/thrust/brand/logo-with-text.svg" height="90" alt="Thrust Network" style={{ position: 'absolute', top: 70, left: 80 }} />
        <p
          style={{
            position: 'absolute',
            bottom: 70,
            left: 80,
            margin: 0,
            fontSize: 30,
            letterSpacing: -1
          }}
        >
          Create beautiful web3 gaming hubs with Thrust Network.
        </p>
        <h1
          style={{
            fontSize: 82,
            margin: '0 0 40px -2px',
            lineHeight: 1.1,
            textShadow: '0 2px 30px #000',
            letterSpacing: -4,
            backgroundImage: 'linear-gradient(90deg, #fff 40%, #aaa)',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          {title}
        </h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'inter',
          data: inter,
          style: 'normal'
        }
      ]
    }
  )
}
