tailwind.config = {
    theme: {
        fontFamily: {
            'sans': ['Manrope', 'sans-serif'],
        },
        colors: {
            'white': 'hsl(0, 0%, 100%)', // Pricing Component Background

            'cyan-1': 'hsl(174, 77%, 80%)', // Full Slider Bar
            'cyan-2': 'hsl(174, 86%, 45%)', // Slider Background

            'red-1': 'hsl(14, 92%, 95%)', // Discount Background
            'red-2': 'hsl(15, 100%, 70%)', // Discount text

            'blue-1': 'hsl(226, 100%, 87%)', // CTA Text
            'blue-2': 'hsl(230, 100%, 99%)', // Main Background
            'blue-3': 'hsl(224, 65%, 95%)',  // Empty Slider bar
            'blue-4': 'hsl(223, 50%, 87%)',  // Toggle background
            'blue-5': 'hsl(225, 20%, 60%)',  // Text
            'blue-6': 'hsl(227, 35%, 25%)',  // Text & CTA Background

        },
        extend: {
            fontSize: {
               'extra': '15px'
            }
        }
    }
}