import styles from "./SearchPage.module.css";

const SearchPage = () => {
  return (
    <div className={styles.searchPageDiv}>
      <div className={styles.groupDiv}>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv1} />
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.searchAndMakeAnAppointment}>
            Search and Make an Appointment
          </div>
        </div>
        <div className={styles.groupDiv1}>
          <div className={styles.groupDiv2}>
            <div className={styles.frameDiv1}>
              <div className={styles.enterDoctorNameSpecialtyA}>
                Enter doctor name, specialty and treatment type
              </div>
            </div>
            <div className={styles.frameDiv2}>
              <div className={styles.egAlihanSabyrov}>e.g. Alihan Sabyrov</div>
              <div className={styles.groupDiv3}>
                <div className={styles.rectangleDiv2} />
                <img
                  className={styles.search1Icon}
                  alt=""
                  src="/search-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.groupDiv4}>
        <div className={styles.groupDiv5}>
          <div className={styles.frameDiv3}>
            <div className={styles.groupDiv6}>
              <a
                className={styles.allergyAndImmunology}
                href="https://www.sgu.edu/blog/medical/ultimate-list-of-medical-specialties/#allergyandimmunology"
                target="_blank"
              >
                Allergy and immunology
              </a>
              <img className={styles.down1Icon} alt="" src="/down-1.svg" />
            </div>
          </div>
          <div className={styles.frameDiv4}>
            <div className={styles.groupDiv6}>
              <div className={styles.dermatologyAndSkin}>
                Dermatology and skin
              </div>
              <img className={styles.down1Icon} alt="" src="/down-1.svg" />
            </div>
          </div>
          <div className={styles.frameDiv5}>
            <div className={styles.groupDiv6}>
              <div className={styles.dermatologyAndSkin}>Family medicine</div>
              <img className={styles.down1Icon} alt="" src="/down-1.svg" />
            </div>
          </div>
          <div className={styles.frameDiv6}>
            <div className={styles.groupDiv6}>
              <div className={styles.dermatologyAndSkin}>
                Radiation oncology
              </div>
              <img className={styles.down1Icon} alt="" src="/down-1.svg" />
            </div>
          </div>
          <div className={styles.frameDiv7}>
            <div className={styles.groupDiv6}>
              <div className={styles.dermatologyAndSkin}>Gastrology</div>
              <img className={styles.down1Icon} alt="" src="/down-1.svg" />
            </div>
          </div>
          <div className={styles.frameDiv8}>
            <div className={styles.groupDiv6}>
              <div className={styles.dermatologyAndSkin}>
                Physical and reahbilitation
              </div>
              <img className={styles.down1Icon} alt="" src="/down-1.svg" />
            </div>
          </div>
          <div className={styles.frameDiv9}>
            <div className={styles.groupDiv6}>
              <div className={styles.dermatologyAndSkin}>Neurology</div>
              <img className={styles.down1Icon} alt="" src="/down-1.svg" />
            </div>
          </div>
          <div className={styles.frameDiv10}>
            <div className={styles.groupDiv6}>
              <div className={styles.dermatologyAndSkin}>
                Diagnostic radiology
              </div>
              <img className={styles.down1Icon} alt="" src="/down-1.svg" />
            </div>
          </div>
          <div className={styles.frameDiv11}>
            <div className={styles.groupDiv6}>
              <div className={styles.dermatologyAndSkin}>Ophtalmology</div>
              <img className={styles.down1Icon} alt="" src="/down-1.svg" />
            </div>
          </div>
        </div>
        <div className={styles.frameDiv12}>
          <div className={styles.searchAndMakeAnAppointment}>
            Doctor specialties
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
