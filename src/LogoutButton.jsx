import React from 'react';
import supabase from './supabase';

export default function LogoutButton() {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Erreur lors de la déconnexion :', error);
    } else {
      console.log('Utilisateur déconnecté');
      // Optionnel : recharger la page ou gérer une redirection
      // window.location.reload();
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}
