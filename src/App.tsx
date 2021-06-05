import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import ItemPrimary from './components/item-primary/ItemPrimary';
import ItemSecondary from './components/Item-Secondary/ItemSecondary'
import ContactForm from './components/contact-form/ContactForm'

function App() {
  return (
    <div>
    <Menu />
     <Header />
     <ItemPrimary />
     <ItemSecondary />
     <ContactForm />
     <Footer />
    </div>
  );
}

export default App;
