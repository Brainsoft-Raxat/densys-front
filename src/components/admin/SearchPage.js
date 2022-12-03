import styles from "./SearchPage.module.css";
import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'


const SearchPage = () => {
  const [search_input, setSearchInput] = useState("");
  const [countDoctors, setCountDoctors] = React.useState(-1);
  const [numOfPages, setNumOfPages] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [doctors, setDoctors] = useState([])
  const navigate = useNavigate();

  const handleSubmit = (e) =>{

    const {id, value} = e.target;

    navigate({
      pathname: '/admin-page/doctor-view/' + id,
    });
    
  }

  const handleOnSearch = (string, search_input) => {
    console.log(string, search_input);
    setSearchInput(string);
  };

  const handleOnHover = (result) => {
    //console.log(result);
  };

  const handleOnSelect = (item) => {
    // console.log(item);
  };

  const handleOnFocus = () => {
    // console.log("Focused");
  };

  const handleOnClear = () => {
    // console.log("Cleared");
  };

  const formatResult = (item) => {
    console.log(item);
    return (
      <div className="result-wrapper">
        <span className="result-span">{item.first_name}</span>
        <span className="result-span"> {item.last_name}</span>
      </div>
    );
  };

  useEffect(() => {
    fetch(`https://swe-backend.herokuapp.com/doctors/?search=${search_input}&page_num=${currentPage}&page_size=6`)
      .then(response => response.json())
      .then(data => {
            console.log('data: ' + data.data.doctors)
            setCountDoctors(data.data.count)
            if (data.data.count > 0) {
              setDoctors(prevState => (
                [
                          ...data.data.doctors
                      ]
                  ))
            }
                    });
}, [search_input])


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
                Enter doctor name or surname
              </div>
            </div>

            <div className={styles.frameDiv2}>

            <ReactSearchAutocomplete
            items={doctors}
            maxResults={10}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            onClear={handleOnClear}
            fuseOptions={{ keys: ["first_name", "last_name"] }} // Search in the description text as well
            styling={{ zIndex: 3 }} // To display it on top of the search box below
            formatResult={formatResult}
          />
            
                 
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
              <input type = "image" className={styles.down1Icon} src="/down-1.svg"  id = "allergy" alt = "" onClick = {(e) => handleSubmit(e)}/>
            </div>
          </div>
          <div className={styles.frameDiv4}>
            <div className={styles.groupDiv6}>
              <div className={styles.dermatologyAndSkin}>
                Dermatology and skin
              </div>
              <input type = "image" className={styles.down1Icon} src="/down-1.svg"  id = "dermatology" alt = "" onClick = {(e) => handleSubmit(e)}/>
            </div>
          </div>
          <div className={styles.frameDiv5}>
            <div className={styles.groupDiv6}>
              <div className={styles.dermatologyAndSkin}>Family medicine</div>
              <input type = "image" className={styles.down1Icon} src="/down-1.svg"  id = "familymed" alt = "" onClick = {(e) => handleSubmit(e)}/>
            </div>
          </div>
          <div className={styles.frameDiv6}>
            <div className={styles.groupDiv6}>
              <div className={styles.dermatologyAndSkin}>
                Radiation oncology
              </div>
              <input type = "image" className={styles.down1Icon} src="/down-1.svg"  id = "oncology" alt = "" onClick = {(e) => handleSubmit(e)}/>
            </div>
          </div>
          <div className={styles.frameDiv7}>
            <div className={styles.groupDiv6}>
              <div className={styles.dermatologyAndSkin}>Gastrology</div>
              <input type = "image" className={styles.down1Icon} src="/down-1.svg"  id = "gastrology" alt = "" onClick = {(e) => handleSubmit(e)}/>
            </div>
          </div>
          <div className={styles.frameDiv8}>
            <div className={styles.groupDiv6}>
              <div className={styles.dermatologyAndSkin}>
                Physical and reahbilitation
              </div>
              <input type = "image" className={styles.down1Icon} src="/down-1.svg"  id = "reahbilitation" alt = "" onClick = {(e) => handleSubmit(e)}/>
            </div>
          </div>
          <div className={styles.frameDiv9}>
            <div className={styles.groupDiv6}>
              <div className={styles.dermatologyAndSkin}>Neurology</div>
              <input type = "image" className={styles.down1Icon} src="/down-1.svg"  id = "neurology" alt = "" onClick = {(e) => handleSubmit(e)}/>
            </div>
          </div>
          <div className={styles.frameDiv10}>
            <div className={styles.groupDiv6}>
              <div className={styles.dermatologyAndSkin}>
                Diagnostic radiology
              </div>
              <input type = "image" className={styles.down1Icon} src="/down-1.svg"  id = "radiology" alt = "" onClick = {(e) => handleSubmit(e)}/>
            </div>
          </div>
          <div className={styles.frameDiv11}>
            <div className={styles.groupDiv6}>
              <div className={styles.dermatologyAndSkin}>Ophtalmology</div>
              <input type = "image" className={styles.down1Icon} src="/down-1.svg"  id = "ophtalmology" alt = "" onClick = {(e) => handleSubmit(e)}/>
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
