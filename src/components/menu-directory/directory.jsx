import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory-selectors';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';


const DirectoryMenu = ({ sections }) => { 
        const SectionsMaping = sections.map(({id, title, imageUrl, size, linkUrl}) => {
            return <MenuItem 
            key = { id }
            title = { title } 
            imageUrl = {imageUrl }
            size = { size }
            linkUrl= {linkUrl}
            />
        })
        return (
            <div className='directory-menu'>
                {SectionsMaping} 
            </div>
        )
   
}

const MapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(MapStateToProps)(DirectoryMenu);