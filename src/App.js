import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
    return ( <
        div className = "App" >
        <
        div className = 'ContenidoPrincipal' >
        <
        h1 > Esto dicen nuestros amigos < /h1> <
        Testimonio nombre = 'Veronica Huanto'
        pais = 'Bolivia'
        imagen = 'ximena'
        cargo = 'Ingeniera de Software en '
        empresa = 'UPEA'
        testimonio = 'Hay muchas variaciones de los 
        pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles.Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto.
        ' /
        >
        <
        Testimonio nombre = 'Betania Calle'
        pais = 'Argentina'
        imagen = 'betania'
        cargo = 'Doctor en'
        empresa = 'Hospital del Sur '
        testimonio = 'Hay muchas variaciones de los 
        pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles.Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto.
        '/> <
        Testimonio nombre = 'Karen Martinez'
        pais = 'Sucre🚩'
        imagen = 'karen'
        cargo = 'Periodista en '
        empresa = 'Unitel'
        testimonio = 'Hay muchas variaciones de los 
        pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles.Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto.
        '/> <
        Testimonio nombre = 'Ximena Tambo '
        pais = 'La Paz🚩'
        imagen = 'vero'
        cargo = 'Ingeniera de  Software en'
        empresa = 'Agetic'
        testimonio = 'Hay muchas variaciones de los 
        pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles.Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto.
        '/> <
        /div> <
        /div>
    );
}

export default App;