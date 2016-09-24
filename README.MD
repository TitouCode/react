////////////////////////////////////////////////////
////											////
////											////
////	///////// ////// ///////  //////////////////
////   ///	 /// //	    //	 //	 //		//		////
////  ///////   /////  ///////	//	   //		////
//// ///   //  //	  //   //  //	  //		////
///////		///////////	  ////////// //			////
////											////
////////////////////////////////////////////////////


Prérequis:
Node.js
Webpack  (npm install -g webpack)

attention à ce que le fichier .babelrc soit bien présent et non renommé sous une autre forme, pour la transpilation avec babel.

Créer une dossier bin/ à la racine du projet

Init:
npm install

Dev:
npm start (watch)
npm build (build)



WARNING:
Compilation avec React + React-Template fail!!
En attendant la patch

aller dans node_modules/invariant  --> copier invariant.js dans node_modules/react/lib/
aller dans node_modules/warning  --> copier warning.js dans node_modules/react/lib/