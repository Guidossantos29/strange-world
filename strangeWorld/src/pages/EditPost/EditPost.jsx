import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { BtnContainer, CreatePostContainer, TextArea } from '../CreatePost/styles.js'
import { useFetchDocument } from '../../hooks/useFetchDocument.jsx'
import { useUpdateDocument } from '../../hooks/useUpdateDocument.jsx'

const EditPost = () => {
    const {id} = useParams()
    const { document: post} = useFetchDocument('posts',id)
 
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    useEffect(() => {
        if (post) {
        setTitle(post.title);
        setImage(post.image);
        setBody(post.body);

        const textTags = post.tags.join(", ");

        setTags(textTags);
        }
    }, [post]);

  const { user } = useAuthValue();

  const { updateDocument, response } = useUpdateDocument("posts");

  const navigate  = useNavigate()


  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');
    

   
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

   
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    console.log(tagsArray);

    console.log({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    if(formError) return

    updateDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    
    navigate('/dashboard');
  };
  return (
    <CreatePostContainer>
      <h2>Editar Post</h2>
      <p>Esvreva o que voce quiser e compartilhe o seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
      <label>
          <span>Título:</span>
          <input
            type="text"
            name="text"
            required
            placeholder="Pense num bom título..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input
            type="text"
            name="image"
            
            placeholder="Insira uma imagem que representa seu post"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Conteúdo:</span>
          <TextArea
            name="body"
            required
            placeholder="Insira o conteúdo do post"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></TextArea>
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
       
        <BtnContainer>
        {!response.loading && <button>Criar post!</button>}
        {response.loading && (
          <button disabled>
            Aguarde.. .
          </button>
        )}
        {(response.error || response.error) && ( <p>{formError.error || formError}</p>
        )}
        </BtnContainer>
      </form>
      
    </CreatePostContainer>
  )
}

export default EditPost
