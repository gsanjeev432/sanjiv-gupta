import { useEffect } from "react";
import styles from "./Screen2WhenUserClicksOnA.module.css";

const Screen2WhenUserClicksOnA = () => {
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
  return (
    <div className={styles.screen2WhenUserClicksOnA}>
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <div className={styles.frameParent} data-animate-on-scroll>
        <div className={styles.endorsedByQaExpertsLikeYoWrapper}>
          <b className={styles.endorsedByQa}>Endorsed by QA experts like you</b>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.image16Parent}>
            <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
            <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
          </div>
          <div className={styles.image12Wrapper}>
            <img className={styles.image17Icon} alt="" src="/image-12@2x.png" />
          </div>
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
              src="/biarrowrightshort1.svg"
            />
          </div>
          <div className={styles.button1}>
            <div className={styles.signUp}>Schedule a demo</div>
            <img
              className={styles.biarrowRightShortIcon}
              alt=""
              src="/biarrowrightshort1.svg"
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
        <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      </div>
      <div className={styles.frame1} data-animate-on-scroll>
        <div className={styles.frame2}>
          <img className={styles.gradientIcon} alt="" src="/gradient1.svg" />
          <div className={styles.responseToThe}>
            Response to the question asked in the landing page
          </div>
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
                className={styles.frameChild}
                placeholder="Type something to get started or click on the sample questions below."
                type="text"
                size={75}
              />
              <img
                className={styles.lineMdsearchIcon}
                alt=""
                src="/linemdsearch1.svg"
              />
            </div>
          </div>
          <div className={styles.button2}>
            <div className={styles.signUp}>Ask Tia</div>
            <img
              className={styles.biarrowRightShortIcon}
              alt=""
              src="/biarrowrightshort.svg"
            />
          </div>
          <img
            className={styles.screenshot20231002At1057}
            alt=""
            src="/screenshot-20231002-at-1057-1@2x.png"
          />
          <div className={styles.byClickingTheContainer}>
            {`By clicking the sign up button above, you agree to our `}
            <a
              className={styles.termsOfUse}
              href="https://stackshare.io/terms"
              target="_blank"
            >
              <span className={styles.termsOfUse1}>Terms of Use</span>
            </a>
            {` and `}
            <a
              className={styles.termsOfUse}
              href="https://stackshare.io/privacy"
              target="_blank"
            >
              <span className={styles.termsOfUse1}>Privacy Policy</span>
            </a>
          </div>
          <div className={styles.preserveYourConversationContainer}>
            <p className={styles.preserveYourConversationHis}>
              <b>Preserve your conversation history</b>
            </p>
            <p className={styles.preserveYourConversationHis}>
              <b>&nbsp;</b>
            </p>
            <p className={styles.preserveYourConversationHis}>
              Tia helps you stay on top of the quality converation that matter
              most to you.
            </p>
          </div>
        </div>
        <div className={styles.frame3}>
          <div className={styles.trendingConversationQuestionContainer}>
            <p className={styles.preserveYourConversationHis}>
              <b>Trending Conversation</b>
            </p>
            <p className={styles.preserveYourConversationHis}>
              <b>&nbsp;</b>
            </p>
            <p className={styles.preserveYourConversationHis}>
              question 1 - ask Tia (button or icon)
            </p>
            <p className={styles.preserveYourConversationHis}>
              question 2 - ask Tia (button or icon)
            </p>
            <p className={styles.preserveYourConversationHis}>
              question 3- ask Tia (button or icon)
            </p>
            <p className={styles.preserveYourConversationHis}>
              question 4 - ask Tia (button or icon)
            </p>
            <p className={styles.preserveYourConversationHis}>
              question 5 - ask Tia (button or icon)
            </p>
          </div>
          <div className={styles.whyAitestSomethingContainer}>
            <p className={styles.preserveYourConversationHis}>
              <b>Why aiTest?</b>
            </p>
            <p className={styles.preserveYourConversationHis}>
              <b>&nbsp;</b>
            </p>
            <p
              className={styles.preserveYourConversationHis}
            >{`Something about aiTest `}</p>
            <p className={styles.preserveYourConversationHis}>&nbsp;</p>
            <p className={styles.preserveYourConversationHis}>&nbsp;</p>
            <p className={styles.preserveYourConversationHis}>&nbsp;</p>
            <p className={styles.preserveYourConversationHis}>
              and a small video
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen2WhenUserClicksOnA;
