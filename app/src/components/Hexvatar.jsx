import React, { useState } from 'react'
import Avatar from "boring-avatars";

const Hexvatar = ({
    variant = 'bauhaus', // marble, beam, pixel, sunset, ring, bauhaus
    colors = ['#FF4746', '#E8DA5E', '#92B55F', '#487D76', '#4B4452'],
    address = '0x00000',
    square = false,
    size = 40,
    ...props
}) => {
    return (
        <Avatar
            size={size}
            name={address}
            variant={variant}
            colors={colors}
        />
    )
}

export default Hexvatar