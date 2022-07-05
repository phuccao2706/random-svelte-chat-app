<script>
  export let name;
  import {
    getDocs,
    getFirestore,
    collection,
    addDoc,
    onSnapshot,
  } from "firebase/firestore";
  import { onMount } from "svelte";

  import fb from "./firebase";
  let arr = [];
  let value = "";

  onMount(async () => {
    try {
      const db = getFirestore(fb);
      const docRef = collection(db, "chat");
      const docSnap = await getDocs(docRef);

      onSnapshot(docRef, (docSnap) => {
        const _arr = [];

        docSnap.forEach((doc) => {
          _arr.push({ id: doc.id, ...doc.data() });
        });

        arr = [..._arr];
      });

      docSnap.forEach((doc) => {
        console.log(doc.data());
        arr = [...arr, { id: doc.id, ...doc.data() }];
      });
    } catch (e) {
      console.error(e);
    }
  });

  const onSend = async () => {
    try {
      const db = getFirestore(fb);
      const docRef = collection(db, "chat");
      addDoc(docRef, { text: value, createdAt: new Date() });
    } catch (e) {
      console.error(e);
    }
  };
</script>

<main>
  <form on:submit|preventDefault={onSend}>
    <input bind:value onchange={(e) => (value = e.target.value)} type="text" />
    <button>send</button>
  </form>
  {#if arr.length}
    {#each arr as c (c.id)}
      <div>{c.text}</div>
    {/each}
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
