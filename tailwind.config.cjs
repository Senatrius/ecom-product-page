/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        underline: '0px -4px 0px hsl(26, 100%, 55%) inset'
      }
    },
    colors: {
      primary: {
        orange: 'hsl(26, 100%, 55%)',
        'orange-hover': 'hsl(25, 100%, 94%)',
        text: 'hsl(220, 13%, 13%)'
      },
      secondary: {
        paragraph: 'hsl(219, 9%, 45%)',
        discount: 'hsl(27, 82%, 94%)',
        control: 'hsl(223, 64%, 98%)'
      },
      white: 'white',
      overlay: 'hsla(0, 0%, 0%, .75)',
      border: 'hsl(240, 5%, 91%)'
    },
    fontSize: {
      'm-nav': [
        '1.125rem',
        {
          fontWeight: 700
        }
      ],
      'd-nav': [
        '0.9375rem',
        {
          fontWeight: 400
        }
      ],
      'm-subheading': [
        '0.75rem',
        {
          fontWeight: 700,
          letterSpacing: '0.1425em'
        }
      ],
      'd-subheading': [
        '0.875rem',
        {
          fontWeight: 700,
          letterSpacing: '0.08em'
        }
      ],
      'm-heading': [
        '1.75rem',
        {
          fontWeight: 700,
          lineHeight: '115.5%'
        }
      ],
      'd-heading': [
        '2.75rem',
        {
          fontWeight: 700,
          lineHeight: '111%'
        }
      ],
      'm-paragraph': [
        '15px',
        {
          fontWeight: 400,
          lineHeight: '165%',
          letterSpacing: '0.0015em'
        }
      ],
      'd-paragraph': [
        '15px',
        {
          fontWeight: 400,
          lineHeight: '165%',
          letterSpacing: '0.005em'
        }
      ],
      price: [
        '28px',
        {
          fontWeight: 700,
          letterSpacing: '0.035em'
        }
      ],
      'discount-unit': [
        '16px',
        {
          fontWeight: 700,
          letterSpacing: '0.03em'
        }
      ],
      button: [
        '16px',
        {
          fontWeight: 700
        }
      ],
      'cart-label': [
        '16px',
        {
          fontWeight: 700
        }
      ],
      'cart-item': [
        '16px',
        {
          fontWeight: 400
        }
      ]
    }
  },
  plugins: []
};
