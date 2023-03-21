import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useState } from "react";
import Stepper from "../components/Stepper/Stepper";
import { TbSolarPanel, TbSolarPanel2 } from "react-icons/tb";
const img_panneau_sol = new URL(
  "../../../public/assets/panneau_sur_sol.png",
  import.meta.url
);
export default function Etape3() {
  const router = useRouter();
  const [place, setPlace] = useState(router.query.place ?? "sol");
  const [longeur, setLongeur] = useState(router.query.longeur ?? 0);
  const [largeur, setLargeur] = useState(router.query.largeur ?? 0);
  const [orientation, setOrientation] = useState(
    router.query.orientation ?? "sud"
  );
  return (
    <div>
      <Navbar />
      <Stepper index={3} />
      <div className=" container  justify-content-center row">
        <div className=" cardFormulaire   col-md-8 col-lg-8 col-sm-12">
          <div>
            <h4 className=" row cardFormulaire-title  justify-content-center  ">
              Etape 3 : Votre Emplacement
            </h4>
          </div>
          <div>
            
          </div>
          <div>
            <div className=" row  justify-content-center ">
              <div className="col">
                <label>Emplacement:</label>
              </div>
              <div className="col">
                <input
                  type="radio"
                  name="emplacement"
                  id="toit"
                  value="toit"
                  checked={place === "toit"}
                  onClick={(event) => {
                    setPlace("toit");
                  }}
                />
                {/*<img className="imgPaneau" src={img_panneau_sol}></img>*/}
                <TbSolarPanel2 style={{ color: "#09A79D" }} size={30} />
                <label for="toit">sur le toit</label>
              </div>
              <div className="col">
                <input
                  type="radio"
                  name="emplacement"
                  id="sol"
                  value="sol"
                  checked={place === "sol"}
                  onClick={(event) => {
                    setPlace("sol");
                  }}
                />
                <TbSolarPanel style={{ color: "#09A79D" }} size={30} />
                <label for="sol">sur le sol</label>
              </div>
            </div>

            <div className=" row  ">
              <label>Longueur:</label>
              <input
                type="text"
                name="longeur"
                placeholder="longeur"
                className="formInput"
                value={longeur}
                onChange={(event) => {
                  setLongeur(event.target.value);
                }}
              />
              <label>Largeur:</label>
              <input
                type="text"
                name="largeur"
                placeholder="largeur"
                className="formInput"
                value={largeur}
                onChange={(event) => {
                  setLargeur(event.target.value);
                }}
              />
            </div>
            <div className="row  justify-content-center">
              <label>Orientation:</label>
              <select
                name="type"
                type="text"
                placeholder="orientation"
                className="formSelect form-select "
                value={orientation}
                onChange={(event) => {
                  setOrientation(event.target.value);
                }}
              >
                <option value="sud">Sud</option>
                <option value="sudEst">Sud Est</option>
                <option value="sudOuest">Sud ouest</option>
              </select>
            </div>

            <div className="row justify-content-end">
              <button
                className="form-button "
                onClick={() => {
                  router.push({
                    pathname: "/devis/Etape2",
                    query: {
                      firstName: router.query.firstName,
                      lastName: router.query.lastName,
                      phoneNumber: router.query.phoneNumber,
                      email: router.query.email,
                      adress: router.query.adress,
                      job: router.query.job,
                      age: router.query.age,
                      type: router.query.type,
                      technology: router.query.technology,
                    },
                  });
                }}
              >
              Précédent
              </button>

              <button
                className="form-button"
                onClick={() => {
                  router.push({
                    pathname: "/devis/Etape4",
                    query: {
                      firstName: router.query.firstName,
                      lastName: router.query.lastName,
                      phoneNumber: router.query.phoneNumber,
                      email: router.query.email,
                      adress: router.query.adress,
                      job: router.query.job,
                      age: router.query.age,
                      type: router.query.type,
                      technology: router.query.technology,
                      place: place,
                      longeur: longeur,
                      largeur: largeur,
                      orientation: orientation,
                    },
                  });
                }}
              >
                Suivant
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
