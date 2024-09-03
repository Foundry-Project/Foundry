

import React, { useEffect, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const Notification = () => {
  const { currentColor } = useStateContext();
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Replace with your actual API endpoint
    axios.get('http://localhost:3000/match/handled')
      .then(response => {
        setMatches(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching match data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Notifications</p>
          <button type="button" className="text-white text-xs rounded p-1 px-2 bg-orange-theme">5 New</button>
        </div>
        <Button icon={<MdOutlineCancel />} color="rgb(153, 171, 180)" bgHoverColor="light-gray" size="2xl" borderRadius="50%" />
      </div>
      <div className="mt-5">
        {matches.length > 0 ? (
          matches.map((match, index) => (
            <div 
              key={index} 
              className="flex items-center leading-8 gap-5 border-b-1 border-color p-3 cursor-pointer"
              onClick={() => {            
                      navigate(`/chat/${match.userId}`)
                axios.put(`http://localhost:3000/match//matches/${match.id}`,{handled:true})
                .then((response)=>{
                  console.log(response);
                }).catch((err)=>{console.log(err);
                })
               } }// Navigate to Chat component
            >
              <div>
                <p className="font-semibold dark:text-gray-200">
                  User {match.userId} matched this post {match.postId}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm dark:text-gray-400">No notifications available.</p>
        )}
        <div className="mt-5">
          <Button color="white" bgColor={currentColor} text="See all notifications" borderRadius="10px" width="full" />
        </div>
      </div>
    </div>
  );
};

export default Notification;
