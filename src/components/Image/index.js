// import library
import { useState, forwardRef } from 'react';
// import file
import images from '~/assets/images';

function Image({ src, alt, customFallback, ...props }, ref) {
    const [fallback, setFallback] = useState();

    const handleError = () => {
        if (customFallback) {
            setFallback(customFallback);
        } else {
            setFallback(images.noImage);
        }
    };

    return <img ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />;
}

export default forwardRef(Image);
