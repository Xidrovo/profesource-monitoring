import React from "react";


const UserCard = (props) =>{

    return(

    <div class="flex-none mb-8 w-100">
      <div class="rounded-lg hover:border-blue-900 border-l border-r border-t border-b border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white lg:rounded-b lg:rounded-l lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="flex items-center">
          <img
            class="w-10 h-10 rounded-full mr-4"
            src={props.img}
            alt="Avatar of User" 
          />
          <div class="text-sm">
            <p class="text-gray-900 leading-none">{props.name}</p>
            <p class="text-gray-600">{props.username}</p>
            
            <p className="text-gray-600">{props.favs} favs</p>
            <p className="text-gray-600">{props.comments} comments</p>
        
          </div>
        </div>
      </div>
    </div>
    )
}

export default UserCard;