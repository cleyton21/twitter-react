import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../index.js'; // Certifique-se de que o caminho está correto
import { useNavigate } from 'react-router-dom';
import { getFirestore, getDocs, collection, addDoc, serverTimestamp } from 'firebase/firestore'; // Importa o método getFirestore do pacote firebase/firestore
import { app } from '../index.js'; // inicializa o Firebase com a configuração importada
import { Link } from 'react-router-dom';

const Home = () => {
  
  const [user] = useAuthState(auth); // Hook para verificar se o usuário está autenticado
  const navigate = useNavigate(); // Hook para navegar entre as páginas

  const [text, setText] = useState('');
  const [posts, setPosts] = useState([]); // Estado para armazenar o texto do post
  const [message, setMessage] = useState(null); // Estado para armazenar a mensagem de confirmação ou erro
  const maxCharacters = 255;


  const db = getFirestore(app); // Inicializa o Firestore
  const postCollectionRef = collection(db, 'posts'); // Referência para a coleção de posts

  useEffect(() => {
    const getPosts = async() => {
      const data = await getDocs(postCollectionRef); // Busca todos os documentos da coleção
      //console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id}))); // outra forma de trazer os dados
      //console.log(data.docs.map(doc => doc.data())); // Exibe os dados dos documentos
      setPosts(data.docs.map(doc => doc.data())); // Atualiza o estado com os dados dos documentos
    };
    getPosts();
  }, []);


  // Função para deslogar o usuário
   const handleSignOut = () => {
    auth.signOut().then(() => {
      navigate('/sign-in'); // Redireciona para a página de login após o logout
    });
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (text.trim() === '') return; // Verifica se o texto não está vazio

    try {
      const docRef = await addDoc(postCollectionRef, {
        post: text,
        email: user.email,
        datahora: serverTimestamp()
      });
      const newPost = {
        post: text,
        email: user.email,
        datahora: { seconds: Date.now() / 1000 }
      };
      setPosts([newPost, ...posts]); // Adiciona o novo post ao início da lista de posts
      setText(''); // Limpa o campo de texto após o envio
      setMessage({ type: 'success', text: 'Mensagem enviada com sucesso!' });
    } catch (error) {
      setMessage({ type: 'error', text: 'Erro ao enviar a mensagem.' });
    }

    setTimeout(() => {
      setMessage(null); // Remove a mensagem após 3 segundos
    }, 3000);
  };

  const formatDate = (timestamp) => {
    if (!timestamp || !timestamp.seconds) return 'Invalid Date';
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'medium' });
  };

 

  return (
    <div className="h-screen w-full bg-gray-200">
    {/* Header */}
      <div className="flex w-full h-[45px] p-[8px] px-[20px] py-[9px] border-b border-[#E5E7EB] bg-white opacity-100">
        <h1 className="text-[18px] font-normal leading-[28px] text-left text-[#0EA5E9]">
          Aluritter
        </h1>

        <div className="flex items-center absolute right-[20px] top-[8px] gap-0">
          {user ? (
            <>
              <p className="w-[205px] h-[20px] mt-[3.5px] mr-[10px] font-['Roboto'] text-[14px] font-normal leading-[20px] text-right text-gray-500">
                {user.email}
              </p>

              <button onClick={handleSignOut}
                className="w-[39.24px] h-[28px] p-[3.5px] px-[8.24px] rounded-[4px] bg-[#EF4444] flex items-center justify-center">
                <span className="text-[14px] font-normal leading-[20px] text-white">
                  Sair
                </span>
              </button>
            </>
          ) : (
           
          <p className="w-[205px] h-[20px] mt-[3.5px] mr-[10px] font-['Roboto'] text-[14px] font-normal leading-[20px] text-right text-gray-500">
            <Link to="/sign-in" className="text-blue-500 hover:underline mr-4">Login</Link>
            <Link to="/sign-up" className="text-blue-500 hover:underline">Cadastro</Link>
          </p>
          )}
        </div>
      </div>

      {!user && (
        <div className="w-[1200px] mx-auto p-2 bg-yellow-500 text-white text-center mt-4 rounded-md">
          <span className="mr-2">Para twittar, é necessário estar logado.</span>
          <Link to="/sign-in" className="text-blue-700 hover:underline">Clique aqui para fazer login!</Link>
        </div>
      )}

        {/* Form container */}
      

      {user ? (
        <div className="flex justify-center items-start w-full mt-12">
          <div className="form w-[1200px] flex flex-col justify-center items-start">
            {message && (
              <div className={`w-full p-2 rounded-md ${message.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white mb-4 transition-opacity duration-3000 ease-in-out opacity-0 animate-fade-in`}>
                {message.text}
              </div>
            )}
            <p className="ml-2 mb-1 w-[170.56px] font-['Roboto'] text-[14px] font-normal leading-[20px] text-left text-[#4B5563] underline-offset-from-font">
              Alurite agora mesmo...
            </p>
            <form onSubmit={handlePostSubmit}>
            <textarea 
                className="w-[1200px] h-[114px] rounded-md border border-[#E5E7EB] bg-white p-4 bg-gray-100 text-gray-700"
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={maxCharacters}
            >
            </textarea>

              <div className="flex w-full mt-4 justify-between">
                <p className="w-[300.9px]">
                  <span className="font-['Roboto'] text-[14px] font-normal leading-[20px] text-left text-[#16A34A]">
                  Você ainda pode digitar {maxCharacters - text.length} caracteres
                  </span>
                </p>

                  <button type="submit"
                  className="w-[66.49px] h-[40px] rounded-md bg-[#0EA5E9] flex items-center justify-center">
                    <span className="font-['Roboto'] text-[12px] font-normal leading-[24px] text-white">
                      aluritar
                    </span>
                  </button>

              </div>
            </form>
            
          </div>
        </div>
        ) : (
          <p></p>
        )}

      {/* Footer */}
      {posts.map((post, index) => {
        return (
          <div key={index} className="flex justify-center w-full">
          <div className="w-[1200px] h-[98px] p-[20px] rounded-md border border-[#E5E7EB] bg-white mt-6 relative transition-all duration-500 ease-in-out transform hover:scale-105">
            <div className="w-full text-[#6B7280] text-[16px] font-normal leading-[24px]">
              {post.post}
            </div>
            
            <div className="flex justify-between items-end absolute bottom-0 left-0 w-full px-[20px]">
              <span className="font-['Roboto'] text-[14px] font-normal text-[#0EA5E9]">
                {post.email}
              </span>
              <span className="font-['Roboto'] text-[12px] font-normal text-[#6B7280]">
                {formatDate(post.datahora)}
              </span>
            </div>
          </div>
        </div>
        )
      })}
    

    </div>
  );
};

export default Home;
