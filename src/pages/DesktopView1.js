import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DesktopView1.module.css";

const DesktopView1 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onButtonClick = useCallback(() => {
    navigate("/screen-2-when-user-clicks-on-ask-tia-in-the-landing-page");
  }, [navigate]);

  return (
    <div className={styles.desktopView}>
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.endorsedByQaExpertsLikeYoWrapper}>
          <b className={styles.endorsedByQa}>Endorsed by QA experts like you</b>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.image16Parent}>
            <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
            <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
          </div>
          <img className={styles.frameChild} alt="" src="/image-12@2x.png" />
          <div className={styles.image16Parent}>
            <img className={styles.image21Icon} alt="" src="/image-21@2x.png" />
            <img className={styles.image20Icon} alt="" src="/image-20@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.groupParent} data-animate-on-scroll>
        <div className={styles.buttonParent}>
          <div className={styles.button}>
            <div className={styles.signUp}>{`Sign up `}</div>
            <img
              className={styles.biarrowRightShortIcon}
              alt=""
              src="/biarrowrightshort2.svg"
            />
          </div>
          <div className={styles.button1}>
            <div className={styles.signUp}>Schedule a demo</div>
            <img
              className={styles.biarrowRightShortIcon}
              alt=""
              src="/biarrowrightshort2.svg"
            />
          </div>
        </div>
        <b className={styles.signUpIts}>{`Sign up. It’s free. Use it now. `}</b>
        <div className={styles.aCopilotDesigned}>
          A copilot designed by testers for testers.
        </div>
        <div className={styles.qualityx2023}>@QualityX 2023</div>
        <img
          className={styles.screenshot20231003At1051}
          alt=""
          src="/screenshot-20231003-at-1051-1@2x.png"
        />
      </div>
      <div className={styles.frame}>
        <img className={styles.gradientIcon} alt="" src="/gradient2.svg" />
        <div className={styles.communityParent}>
          <div className={styles.community}>Community</div>
          <a
            className={styles.aiTest}
            href="https://aitest.appliedaiconsulting.com"
            target="_blank"
          >
            ai Test
          </a>
          <a
            className={styles.aiTest}
            href="https://qualityx.io/contactus"
            target="_blank"
          >
            Contact Us
          </a>
        </div>
        <div className={styles.logInParent}>
          <a
            className={styles.logIn}
            href="https://app.aitest.appliedaiconsulting.com/"
            target="_blank"
          >
            Log in
          </a>
          <div className={styles.signUpWrapper}>
            <a
              className={styles.logIn}
              href="https://app.aitest.appliedaiconsulting.com/"
              target="_blank"
            >
              Sign up
            </a>
          </div>
        </div>
        <b className={styles.qualityx}>QualityX</b>
        <div
          className={styles.simpleAnswersFor}
        >{`Simple answers for quality testers `}</div>
        <div className={styles.howDoITestALargeLanguageParent}>
          <div className={styles.howDoI}>
            How do I test a Large Language Model (LLM)?
          </div>
          <div className={styles.groupChild} />
        </div>
        <div className={styles.whyShouldWeDoApiIntegratiParent}>
          <div className={styles.whyShouldWe}>
            Why should we do API integration testing if we have already done
            individual unit tests?
          </div>
          <div className={styles.groupItem} />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.groupInner} />
          <div className={styles.qxLogo2Parent}>
            <img className={styles.qxLogo2} alt="" src="/qx-logo-2@2x.png" />
            <input
              className={styles.frameItem}
              placeholder="Type something to get started or click on the sample questions below."
              type="text"
              size={65}
            />
            <img
              className={styles.lineMdsearchIcon}
              alt=""
              src="/linemdsearch1.svg"
            />
          </div>
        </div>
        <button className={styles.button2} onClick={onButtonClick}>
          <div className={styles.askTia}>Ask Tia</div>
          <img
            className={styles.biarrowRightShortIcon}
            alt=""
            src="/biarrowrightshort.svg"
          />
        </button>
        <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      </div>
      <div className={styles.frame1} data-animate-on-scroll>
        <div className={styles.qualityxIsForAllTestersParent}>
          <b className={styles.qualityxIsFor}>QualityX is for all testers</b>
          <div className={styles.sliceDiv} />
          <div className={styles.aReliableAi}>
            A reliable AI copilot that takes the stress out of your life.
          </div>
          <div className={styles.groupContainer}>
            <div className={styles.tiaYourPersonalCopilotParent}>
              <b className={styles.tiaYourPersonal}>
                Tia, your personal Copilot
              </b>
              <div className={styles.tiaSpeaksYourContainer}>
                <p
                  className={styles.tiaSpeaksYour}
                >{`Tia speaks your language; she cares about you and is a true domain expert. She is always here to help you. `}</p>
              </div>
            </div>
            <div className={styles.button3}>
              <div className={styles.signUp}>Ask Tia</div>
              <img
                className={styles.biarrowRightShortIcon}
                alt=""
                src="/biarrowrightshort.svg"
              />
            </div>
          </div>
          <div className={styles.frameDiv} />
          <div className={styles.aitestTestingCopilotParent}>
            <b className={styles.aitestTesting}>aiTest - Testing Copilot</b>
            <div
              className={styles.confidentlyTestAny}
            >{`Confidently test any application, LLM, ML service, API and data pipeline with aiTest. Our copilot allows you to meet your quality measures faster. `}</div>
          </div>
          <div className={styles.buttonGroup}>
            <div className={styles.button}>
              <a
                className={styles.signUpFor}
                href="https://app.aitest.appliedaiconsulting.com/"
                target="_blank"
              >
                Sign up for free
              </a>
              <img
                className={styles.biarrowRightShortIcon}
                alt=""
                src="/biarrowrightshort.svg"
              />
            </div>
            <div className={styles.button5}>
              <div className={styles.signUp}>Schedule a demo</div>
              <img
                className={styles.biarrowRightShortIcon}
                alt=""
                src="/biarrowrightshort.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.groupParent1}>
          <div className={styles.qualityxAcademyParent}>
            <b className={styles.qualityxAcademy}>QualityX Academy</b>
            <div className={styles.learnAndGetContainer}>
              <p
                className={styles.tiaSpeaksYour}
              >{`Learn and get certified with our Academy. `}</p>
              <p className={styles.tiaSpeaksYour}>
                Keep your skills current and become an aiTest expert.
              </p>
            </div>
          </div>
          <div className={styles.frameInner} />
          <div className={styles.button6}>
            <div className={styles.signUp}>Join Community</div>
            <img
              className={styles.biarrowRightShortIcon}
              alt=""
              src="/biarrowrightshort3.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopView1;
