import React, {useState, useEffect} from 'react';
import ReactFlow, {getIncomers} from 'react-flow-renderer';
import initialElements from './initialState';
import Modal from './components/Modal/Modal';
import './App.css';

const style = {
  height: '100%',
  overflow: 'visible',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width:' 61%'
}



function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [elements] = useState(initialElements);
  const [elementsView, setElementsView] = useState([]);



  const clearElementsView = () => {
    setElementsView([]);
  }

  const closeModal = () => {
    setIsOpenModal(false)
    clearElementsView();
  }

  const openModal = () => {
    setIsOpenModal(true);
  }

    const searchParentNode = (node) => {

    getIncomers(node, elements).map((parent) => {
      setElementsView(arr => [...arr, parent])
    })
    getIncomers(node, elements).map((parent) => {
      if (parent) {
        searchParentNode(parent);
      }
    })
  }

  const onElementClick = ((event, element) => {
    setElementsView(elementsView => [...elementsView, element])
    searchParentNode(element);
  });

  useEffect(() => {
    if (elementsView.length) {
      openModal()
    }
  }, [elementsView])

  return (
    <div className="main">
      <ReactFlow
      style={style}
      elements={elements}

      onElementClick={onElementClick}
      snapToGrid={true}
      snapGrid={[15, 15]}
      >

      </ReactFlow>

      {isOpenModal &&
        <Modal
          elements={elementsView}
          closeModal={closeModal}
        />
      }
    </div>
    
  );
}

export default App;
