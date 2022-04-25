import { Item } from "semantic-ui-react";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      personaje: [],
      planetas: [],
      nave: [],
      favorites:[],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      getPersonaje: () => {
        fetch("https://swapi.dev/api/people")
          .then((response) => response.json())
          .then((result) => {
            console.log(result.results);
            setStore({ personaje: result.results });
          })
          .catch((error) => console.log("error", error));
      },

      getPlanetas: () => {
        fetch("https://swapi.dev/api/planets")
          .then((response) => response.json())
          .then((result) => {
            console.log(result.results);
            setStore({ planetas: result.results });
          })
          .catch((error) => console.log("error", error));
      },

      getNave: () => {
        fetch("https://swapi.dev/api/starships")
          .then((response) => response.json())
          .then((result) => {
            console.log(result.results);
            setStore({ nave: result.results });
          })
          .catch((error) => console.log("error", error));
      },


          //AGREGA EL PERSONAJE A FAVORITOS
          getFavorites: () => {
            if (localStorage.getItem('List')) {
                let u = localStorage.getItem('List');
                setStore({ favorites: JSON.parse(u) })
            }
        },
        
        saveList: () => {
          localStorage.setItem('list', JSON.stringify(getStore().favorites))
      },
      addCharacter: (personaje) => {
          if (getStore().favorites.includes(personaje)) {
              alert('this character already exist in your List')
              console.log('the character already exist on your list')
          } else {

              setStore({
                  favorites: getStore().favorites.concat(personaje)
              })
          }
          getActions().saveList();
      },
      deleteFavorite: (item) => {
          setStore({
              favorites: getStore().favorites.filter(fav => fav !== item)
          })
          
          getActions().saveList();
        },

      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
