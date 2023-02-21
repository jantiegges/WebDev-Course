import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Lerne die Grundlagen der Webentwicklung",
    Svg: require("@site/static/img/web-development.svg").default,
    description: (
      <>
        In diesem Kurs lernst du die Grundlagen der Webentwicklung. Dazu
        gehören HTML, CSS und JavaScript.
      </>
    ),
  },
  {
    title: "Lerne deine eigene moderne Website zu erstellen",
    Svg: require("@site/static/img/website-design.svg").default,
    description: (
      <>
        Du wirst eine moderne Website erstellen, die du dann mit deinen Freunden
        teilen kannst. Hierzu nutzen wir Bootstrap, damit du schnell und einfach
        eine schöne Website erstellen kannst.
      </>
    ),
  },
  {
    title: "Starte deine eigenen Projekte",
    Svg: require("@site/static/img/task.svg").default,
    description: (
      <>
        Diese Website soll als Nachschlagwerk dienen und dir helfen, deine
        eigenen Projekte zu starten.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
