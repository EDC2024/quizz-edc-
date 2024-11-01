import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  PlusCircle, 
  Check, 
  X, 
  PlayCircle, 
  Users,
  Copy,
  Share2,
  ChevronLeft,
  ChevronDown
} from 'lucide-react';

// Composant Homepage
const HomePage = ({ onNavigate }) => (
  <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Quiz Interactif
        </h1>
        <p className="text-lg text-gray-600">
          Créez et gérez vos quiz en temps réel
        </p>
      </div>

      <div className="grid gap-6">
        <Button
          variant="outline"
          className="h-24 text-lg relative overflow-hidden group"
          onClick={() => onNavigate('create')}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center justify-center gap-4 relative z-10">
            <PlayCircle className="w-8 h-8 text-green-600" />
            <div className="text-left">
              <div className="font-semibold">Créer une Session</div>
              <div className="text-sm text-gray-500">Commencer un nouveau quiz</div>
            </div>
          </div>
        </Button>

        <Button
          variant="outline"
          className="h-24 text-lg relative overflow-hidden group"
          onClick={() => onNavigate('join')}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center justify-center gap-4 relative z-10">
            <Users className="w-8 h-8 text-purple-600" />
            <div className="text-left">
              <div className="font-semibold">Rejoindre une Session</div>
              <div className="text-sm text-gray-500">Participer à un quiz</div>
            </div>
          </div>
        </Button>
      </div>
    </div>
  </div>
);

// Composant StudentJoin
const StudentJoin = ({ onBack }) => {
  const [roomCode, setRoomCode] = useState('');
  const [name, setName] = useState('');

  return (
    <div className="max-w-md mx-auto py-6 px-4">
      <div className="mb-6">
        <Button variant="ghost" onClick={onBack} className="gap-2">
          <ChevronLeft className="w-4 h-4" />
          Retour
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Rejoindre une classe</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Votre nom
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="Entrez votre nom"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Code de la salle
              </label>
              <input
                type="text"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                className="w-full p-2 border rounded-md text-center text-2xl tracking-wide"
                placeholder="Ex: MAV123"
                maxLength={6}
              />
            </div>

            <Button className="w-full">
              Rejoindre la classe
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Composant RoomCreator
const RoomCreator = ({ onBack }) => {
  const [roomCode] = useState('MAV123');
  const [isActive, setIsActive] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="max-w-3xl mx-auto py-6 px-4">
      <div className="mb-6">
        <Button variant="ghost" onClick={onBack} className="gap-2">
          <ChevronLeft className="w-4 h-4" />
          Retour
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Nouvelle Session</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-sm text-gray-500 mb-2">Code de la salle</div>
              <div className="flex items-center justify-center gap-4">
                <div className="text-4xl font-bold tracking-wide text-blue-600">
                  {roomCode}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(roomCode)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Instructions pour vos élèves :</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">1</div>
                  <div>Ouvrir un navigateur web</div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">2</div>
                  <div>Entrer le code : {roomCode}</div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">3</div>
                  <div>Saisir leur nom</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-600">0 élèves connectés</span>
              </div>
              <Button
                onClick={() => setIsActive(!isActive)}
                variant={isActive ? "destructive" : "default"}
              >
                {isActive ? "Terminer la session" : "Démarrer la session"}
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <Share2 className="w-4 h-4 mr-2" />
                Partager par email
              </Button>
              <Button variant="outline" className="w-full">
                <Copy className="w-4 h-4 mr-2" />
                Copier le lien
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Composant principal ClassroomQuiz
const ClassroomQuiz = () => {
  const [currentView, setCurrentView] = useState('home');

  const handleNavigate = (view) => {
    setCurrentView(view);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'create':
        return <RoomCreator onBack={() => setCurrentView('home')} />;
      case 'join':
        return <StudentJoin onBack={() => setCurrentView('home')} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return renderContent();
};

export default ClassroomQuiz;