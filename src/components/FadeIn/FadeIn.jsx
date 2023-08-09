import { animated, useSpring, useTransition } from '@react-spring/web';

export const FadeIn = ({ data }) => {
  const [transition] = useTransition(data, () => ({
    from: { y: -24, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: -24, opacity: 0 },
  }));
  console.log(data);
  return transition((style, item) =>
    item ? <animated.div style={style}></animated.div> : ''
  );
};
