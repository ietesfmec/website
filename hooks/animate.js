export default function animate(element, animation, delay='') {
    return new Promise((resolve, reject) => {
        const prefix = 'animate__';
        const animationName = `${prefix}${animation}`;
        const node = element;
        if(!node)   return;
        node.classList.add(`${prefix}animated`, animationName, `${prefix}${delay}`);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
        event.stopPropagation();
        node.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });
}