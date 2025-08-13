import styles from "./index.module.css";

const calculateHeight = (width) => {
  // Width / Height ratio
  const aspectRatio = 0.76;
  const height = width / aspectRatio;

  return height;
};

const Card = ({ children, width = 500, height = 600, maintainAspectRatio }) => {
  const adjustedHeight = maintainAspectRatio ? calculateHeight(width) : height;
  const svgHeight = adjustedHeight * 0.86;
  const svgWidth = width * 0.92;

  return (
    <div
      style={{
        width,
        height: adjustedHeight,
      }}
      className={styles.card}
    >
      <div className={styles.card__container}>
        {/* Triangle - top left corner */}
        <div className={styles.card__triangle}></div>

        {/* Rendering two polygons for creating a border to the outer polygon */}
        {/* Outer Polygon */}
        <div className={styles["card__polygon-outer"]}>
          {/* Inner Polygon */}
          <div className={styles["card__polygon-inner"]}>
            <svg
              className={styles["card__top-line"]}
              height={svgHeight}
              width={svgWidth}
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline
                points={`1,${0.2 * svgHeight} ${0.2 * svgWidth},1 ${
                  0.75 * svgWidth
                },1`}
                style={{ fill: "none", stroke: "#157fbcff", strokeWidth: 2 }}
              />
            </svg>
            {/* Content */}
            <div className={styles.card__content}>{children}</div>
          </div>
        </div>
        {/* Left dot */}
        <div className={styles["card__dot-left"]}></div>
        {/* Right dot */}
        <div className={styles["card__dot-right"]}></div>
      </div>

      <svg
        className={styles["card__bottom-line"]}
        height={svgHeight}
        width={svgWidth}
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline
          points={`1,${0.8 * svgHeight} ${0.2 * svgWidth},${svgHeight - 1} ${
            0.4 * svgWidth
          },${svgHeight - 1}`}
          style={{ fill: "none", stroke: "#baba1f", strokeWidth: 1 }}
        />
      </svg>
    </div>
  );
};

export default Card;
