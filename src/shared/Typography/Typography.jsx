import PropTypes from "prop-types";

const TagType = {
  h6: "h6",
  h5: "h5",
  h4: "h4",
  h3: "h3",
  h2: "h2",
  h1: "h1",
  p: "p",
};

const Typography = (props) => {
  const { tag, children, ...rest } = props;
  const Component = TagType[tag];

  return (
    <Component className={tag} {...rest}>
      {children}
    </Component>
  );
};

Typography.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.TypographyTag,
};

export default Typography;
