import { animated, useSpring } from '@react-spring/web';

export const FadeIn = ({ isVisible, children }) => {
  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24,
  });

  return <animated.div style={styles}>{children}</animated.div>;
};
