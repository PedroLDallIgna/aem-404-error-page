import CustomClasses from './components/CustomClasses/CustomClasses'
import Text from './components/Text/Text'
import AppPage from './components/Page/AppPage'
import CheckBox from './components/Checkbox/Checkbox'
import Select from './components/Select/Select'
import Header from './components/HeaderDefault/Header'
import Footer from './components/FooterDefault/Footer'
import Image from './components/ImageDefault/Image'
import Main from './components/Main/Main'

// Pedro
import TextPedro from './components/micro/Text/Text'
import TitlePedro from './components/micro/Title/Title'
import ButtonPedro from './components/micro/Button/Button'
import HeaderPedro from './components/Header/Header'
import FooterPedro from './components/Footer/Footer'
import ImagePedro from './components/micro/Image/Image'
import MainPedro from './components/containers/Main/Main'

import Teste from './components/teste/Teste'
import MainTeste from './components/mainTeste/mainTeste.vue'
import ColorTeste from './components/color/color.vue'
import MainWithColors from './components/containers/MainWithColors/MainWithColors.vue'

import {
  withComponentMappingContext,
  AllowedComponentsContainer,
  MapTo
} from '@mavice/aem-vue-editable-components'

MapTo('vue/components/page')(withComponentMappingContext(AppPage))

// Custom EditConfig for General New Vue Components
const EditConfig = {
  emptyLabel: 'Empty',

  isEmpty: function (props) {
    return !props
  }
}
/** *******************************************************************
              ↓  NEW COMPONENTS MAPPING COME HERE  ↓
**********************************************************************/

MapTo('vue/components/customclasses')(CustomClasses, EditConfig)

// Select Component Mapping
MapTo('vue/components/select')(Select, EditConfig)

// Checkbox Component Mapping
MapTo('vue/components/checkbox')(CheckBox, EditConfig)

// Header Component Mapping
MapTo('vue/components/header')(Header, EditConfig)

// Header Component Mapping
MapTo('vue/components/main')(Main, EditConfig)

// Footer Component Mapping
MapTo('vue/components/footer')(Footer, EditConfig)

// Image Component Mapping
MapTo('vue/components/image')(Image, {
  emptyLabel: 'Image',
  isEmpty: function (props) {
    return !props || !props.src || props.src.trim().length < 1
  },
  resourceType: 'vue/components/image'
})

// Text Component Mapping
MapTo('vue/components/text')(Text, {
  emptyLabel: 'Text',

  isEmpty: function (props) {
    return !props || !props.text || props.text.trim().length < 1
  }
})

// Container Component Mapping
MapTo('vue/components/container')(
  withComponentMappingContext(AllowedComponentsContainer),
  {
    emptyLabel: 'Container',

    isEmpty: function (props) {
      return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0
    }
  }
)

MapTo('vue/components/text-pedro')(TextPedro)
MapTo('vue/components/title-pedro')(TitlePedro)
MapTo('vue/components/button-pedro')(ButtonPedro)
MapTo('vue/components/header-pedro')(HeaderPedro)
MapTo('vue/components/footer-pedro')(FooterPedro)
MapTo('vue/components/image-pedro')(ImagePedro)
MapTo('vue/components/main-pedro')(MainPedro)
MapTo('vue/components/teste')(Teste)
MapTo('vue/components/main-teste')(MainTeste)
MapTo('vue/components/color')(ColorTeste)
MapTo('vue/components/main-colors')(MainWithColors)
