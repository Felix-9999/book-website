const infoArr = [
  {
    id: "1",
    bookName: "To Kill a Mockingbird",
    author: "Harper Lee",
    readBook: "https://www.raio.org/TKMFullText.pdf",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780061120084",
    description:
      "Published in 1960, Harper Lee’s debut novel 'To Kill a Mockingbird' was an immediate and astonishing success. It won the Pulitzer Prize and quickly became a global phenomenon, with more than 50 million copies in print to date. Compassionate, dramatic, and deeply moving, 'To Kill a Mockingbird' takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. Now with over 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Harper Lee always considered her book to be a simple love story. Today it is regarded as a masterpiece of American literature.",
    date: "1960-07-11",
  },
  {
    id: "2",
    bookName: "Pride and Prejudice",
    author: "Jane Austen",
    readBook: "https://giove.isti.cnr.it/demo/eread/Libri/joy/Pride.pdf",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780143105428",
    description:
      "'Pride and Prejudice', a novel by Jane Austen, published in 1813, is a romantic comedy about the importance of marrying for love, not simply for money, despite the social pressures to make a good (i.e., wealthy) match. The story revolves around the Bennet family, particularly Elizabeth Bennet, who despite the initially poor impressions of the wealthy and seemingly proud Mr. Darcy, discovers his true character and eventually falls in love with him. Elizabeth’s lively wit and intelligence, coupled with Mr. Darcy’s depth of character, make this novel a timeless exploration of love, family, and the complexities of social class. Austen’s keen observations and deft characterizations have made 'Pride and Prejudice' one of the most cherished novels in English literature.",
    date: "1813-01-28",
  },
  {
    id: "3",
    bookName: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    readBook:
      "https://www.wsfcs.k12.nc.us/cms/lib/NC01001395/Centricity/Domain/7935/Gatsby_PDF_FullText.pdf",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780743273565",
    description:
      "First published in 1925, 'The Great Gatsby' is F. Scott Fitzgerald’s third novel and stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story is of the fabulously wealthy Jay Gatsby and his new love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted “gin was the national drink and sex the national obsession,” it is an exquisitely crafted tale of America in the 1920s. The Great Gatsby is one of the great classics of twentieth-century literature.",
    date: "1925-04-10",
  },
  {
    id: "4",
    bookName: "Moby Dick",
    author: "Herman Melville",
    readBook: "https://gutenberg.org/files/2701/2701-h/2701-h.htm",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780142437247",
    description:
      "'Moby Dick', written by Herman Melville and published in 1851, is a captivating tale of obsession and revenge. The story follows the journey of the whaling ship Pequod, commanded by Captain Ahab, who is driven by his monomaniacal desire to kill Moby Dick, a giant white sperm whale that had previously destroyed Ahab's ship and severed his leg. Through the eyes of Ishmael, a sailor aboard the Pequod, readers experience the harsh realities of life at sea and the complex personalities of the ship’s crew. The novel explores profound themes such as humanity’s struggle against nature, the limits of knowledge, and the destructiveness of vengeance. 'Moby Dick' is considered one of the greatest American novels and a treasure of world literature.",
    date: "1851-10-18",
  },
  {
    id: "5",
    bookName: "War and Peace",
    author: "Leo Tolstoy",
    readBook: "https://www.gutenberg.org/files/2600/2600-h/2600-h.htm",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780143039990",
    description:
      "'War and Peace', written by Leo Tolstoy and first published from 1865 to 1869, is often hailed as one of the greatest novels ever written. The book is set against the backdrop of Napoleon’s invasion of Russia and follows the lives of several aristocratic families. At its heart is the story of Pierre Bezukhov, a young count who is searching for meaning in his life; Prince Andrei Bolkonsky, who seeks glory on the battlefield; and Natasha Rostov, a beautiful young woman who seeks love. The novel spans decades, weaving together a complex tapestry of Russian society, war, and peace, exploring themes of fate, free will, and the power of love. Tolstoy’s masterful storytelling and deep philosophical insights make 'War and Peace' an enduring and monumental work of literature.",
    date: "1869-01-01",
  },
  {
    id: "6",
    bookName: "The Catcher in the Rye",
    author: "J.D. Salinger",
    readBook:
      "https://simontechnology.org/ourpages/auto/2013/1/23/53406450/Catcher%20in%20the%20Rye%20Text.pdf",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780316769488",
    description:
      "Published in 1951, J.D. Salinger’s 'The Catcher in the Rye' is a novel about teenage alienation and the loss of innocence in the protagonist Holden Caulfield. The book covers two days in the life of 16-year-old Holden after he has been expelled from prep school. Confused and disillusioned, he searches for truth and rails against the 'phoniness' of the adult world. He ends up exhausted and emotionally unstable. The novel’s portrayal of teenage angst and rebellion was influential, and it remains a popular coming-of-age story. Salinger’s unique voice and the novel’s exploration of complex themes make 'The Catcher in the Rye' a timeless piece of literature.",
    date: "1951-07-16",
  },
  {
    id: "7",
    bookName: "The Hobbit",
    author: "J.R.R. Tolkien",
    readBook:
      "https://readonlinebookfree.com/2144/the_hobbit",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780345339683",
    description:
      "'The Hobbit', or 'There and Back Again', is a children’s fantasy novel by English author J.R.R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children’s literature. Set in a time 'between the Dawn of Færie and the Dominion of Men', the story follows the quest of home-loving hobbit Bilbo Baggins to win a share of the treasure guarded by Smaug the dragon. Bilbo’s journey takes him from his light-hearted, rural surroundings into more sinister territory. The novel introduces characters and settings that later appear in Tolkien’s 'The Lord of the Rings'.",
    date: "1937-09-21",
  },
  {
    id: "8",
    bookName: "Fahrenheit 451",
    author: "Ray Bradbury",
    readBook: "https://lexiconic.net/english/F451.pdf",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9781451673319",
    description:
      "First published in 1953, Ray Bradbury’s 'Fahrenheit 451' is a dystopian novel set in a future society where books are banned and 'firemen' burn any that are found. The protagonist, Guy Montag, is a fireman who becomes disillusioned with his role in censoring literature and destroying knowledge. As he questions the purpose of his job and the oppressive society he lives in, he begins to seek out and read books, leading to dangerous and life-changing consequences. Bradbury’s novel is a powerful critique of censorship and the suppression of dissenting ideas, exploring themes of knowledge, conformity, and individualism. 'Fahrenheit 451' remains a timeless and thought-provoking exploration of the power of books and the importance of intellectual freedom.",
    date: "1953-10-19",
  },

  {
    id: "9",
    bookName: "Brave New World",
    author: "Aldous Huxley",
    readBook: "https://www.huxley.net/bnw/bravenewworld.pdf",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780060850524",
    description:
      "'Brave New World', published in 1932, is a dystopian novel by Aldous Huxley. Set in a futuristic society where people are engineered and conditioned from birth for specific social roles, the novel explores themes of technology, conformity, and the loss of individuality. The story follows Bernard Marx, an Alpha Plus member of society, who becomes disillusioned with the shallow and controlled existence of his world. As he rebels against the societal norms and seeks meaning beyond the superficial pleasures provided by the state, he uncovers the dark truths behind the utopian facade. Huxley’s novel remains a provocative and thought-provoking examination of the dangers of a technologically advanced society.",
    date: "1932-10-19",
  },
  {
    id: "10",
    bookName: "The Catcher in the Rye",
    author: "J.D. Salinger",
    readBook:
      "https://simontechnology.org/ourpages/auto/2013/1/23/53406450/Catcher%20in%20the%20Rye%20Text.pdf",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780316769488",
    description:
      "Published in 1951, J.D. Salinger’s 'The Catcher in the Rye' is a novel about teenage alienation and the loss of innocence in the protagonist Holden Caulfield. The book covers two days in the life of 16-year-old Holden after he has been expelled from prep school. Confused and disillusioned, he searches for truth and rails against the 'phoniness' of the adult world. He ends up exhausted and emotionally unstable. The novel’s portrayal of teenage angst and rebellion was influential, and it remains a popular coming-of-age story. Salinger’s unique voice and the novel’s exploration of complex themes make 'The Catcher in the Rye' a timeless piece of literature.",
    date: "1951-07-16",
  },
  {
    id: "11",
    bookName: "The Hobbit",
    author: "J.R.R. Tolkien",
    readBook:
      "https://readonlinebookfree.com/2144/the_hobbit",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780345339683",
    description:
      "'The Hobbit', or 'There and Back Again', is a children’s fantasy novel by English author J.R.R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book remains popular and is recognized as a classic in children’s literature. Set in a time 'between the Dawn of Færie and the Dominion of Men', the story follows the quest of home-loving hobbit Bilbo Baggins to win a share of the treasure guarded by Smaug the dragon. Bilbo’s journey takes him from his light-hearted, rural surroundings into more sinister territory. The novel introduces characters and settings that later appear in Tolkien’s 'The Lord of the Rings'.",
    date: "1937-09-21",
  },

  {
    id: "12",
    bookName: "1984",
    author: "George Orwell",
    readBook: "https://rauterberg.employee.id.tue.nl/lecturenotes/DDM110%20CAS/Orwell-1949%201984.pdf",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780451524935",
    description:
      "'1984', published in 1949 by George Orwell, is a dystopian novel that presents a terrifying vision of a totalitarian future in which everything and everyone is slave to a tyrannical regime. The novel follows Winston Smith, a low-ranking member of the ruling Party in London, in the nation of Oceania. Everywhere Winston goes, even his own home, the Party watches him through telescreens; everywhere he looks he sees the face of the Party’s seemingly omniscient leader, a figure known only as Big Brother. The Party controls everything in Oceania, even the people’s history and language. An example of political satire, '1984' is an enduring warning of the dangers of totalitarianism.",
    date: "1949-06-08",
  },
  {
    id: "13",
    bookName: "Crime & Punishment",
    author: "Fyodor Dostoevsky",
    readBook: "https://www.gutenberg.org/files/2554/2554-h/2554-h.htm",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780143107637",
    description:
      "'Crime and Punishment', first published in 1866, is a novel by Fyodor Dostoevsky. It focuses on the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who formulates and executes a plan to kill an unscrupulous pawnbroker for her cash. The story explores themes of guilt, redemption, and the effects of isolation on the human psyche. Through the character of Raskolnikov, Dostoevsky delves into the nature of crime and the complex human condition, making 'Crime and Punishment' a cornerstone of Russian literature and a profound psychological study.",
    date: "1866-01-01",
  },
  {
    id: "14",
    bookName: "Catcher in Rye",
    author: "J.D. Salinger",
    readBook:
      "https://giove.isti.cnr.it/demo/eread/Libri/sad/Rye.pdf",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780316769488",
    description:
      "Published in 1951, J.D. Salinger’s 'The Catcher in the Rye' is a novel about teenage alienation and the loss of innocence in the protagonist Holden Caulfield. The book covers two days in the life of 16-year-old Holden after he has been expelled from prep school. Confused and disillusioned, he searches for truth and rails against the 'phoniness' of the adult world. He ends up exhausted and emotionally unstable. The novel’s portrayal of teenage angst and rebellion was influential, and it remains a popular coming-of-age story. Salinger’s unique voice and the novel’s exploration of complex themes make 'The Catcher in the Rye' a timeless piece of literature.",
    date: "1951-07-16",
  },
  {
    id: "15",
    bookName: "One Solitude",
    author: "Gabriel Garcia Marquez",
    readBook:
      "https://bookreadfree.com/all/5583",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780060883287",
    description:
      "'One Hundred Years of Solitude', published in 1967, is a landmark novel by Colombian author Gabriel Garcia Marquez. The book tells the multi-generational story of the Buendia family, whose patriarch, Jose Arcadio Buendia, founded the town of Macondo in the middle of a jungle. The novel is often cited as one of the supreme achievements in literature due to its magical realism, where the extraordinary and the mundane coexist seamlessly. Themes of time, fate, and the cyclical nature of history are woven through the book, creating a rich, fantastical narrative that explores human experience in profound and imaginative ways.",
    date: "1967-06-05",
  },
  {
    id: "16",
    bookName: "Beloved",
    author: "Toni Morrison",
    readBook:
      "https://ieas-szeged.hu/downtherabbithole/wp-content/uploads/2020/02/Toni-Morrison.-Beloved.pdf",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9781400033416",
    description:
      "Published in 1987, 'Beloved' is a novel by Toni Morrison. Set after the American Civil War, it follows Sethe, an escaped slave who lives with her daughter Denver in a house haunted by the ghost of her deceased child. The novel explores the trauma of slavery and the lingering effects on the individual and collective African American psyche. It addresses themes of identity, motherhood, and the struggle to overcome the past. 'Beloved' won the Pulitzer Prize for Fiction in 1988 and remains one of the most significant works in American literature, showcasing Morrison's lyrical prose and deep emotional resonance.",
    date: "1987-09-18",
  },
  {
    id: "17",
    bookName: "Jane Eyre",
    author: "Charlotte Bronte",
    readBook: "https://www.ucm.es/data/cont/docs/119-2014-04-09-Jane%20Eyre.pdf",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780142437209",
    description:
      "'Jane Eyre', first published in 1847, is a novel by Charlotte Bronte. It follows the experiences of its eponymous heroine, including her growth to adulthood and her love for Mr. Rochester, the brooding master of Thornfield Hall. The novel revolutionized prose fiction by focusing on the protagonist's moral and spiritual development through an intimate first-person narrative, where events are colored by the narrator's psychological intensity. 'Jane Eyre' addresses themes of social class, sexuality, religion, and feminism, making it a timeless classic and a pioneering work in the genre of literary realism.",
    date: "1847-10-16",
  },
  {
    id: "18",
    bookName: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    readBook: "https://www.gutenberg.org/files/174/174-h/174-h.htm",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780141442464",
    description:
      "'The Picture of Dorian Gray', published in 1890, is a philosophical novel by Oscar Wilde. It tells the story of a young man named Dorian Gray, who has his portrait painted. He wishes that he could remain young and beautiful forever while the portrait ages in his place. His wish is granted, and Dorian lives a life of debauchery and sin while maintaining his youthful appearance. Meanwhile, his portrait becomes increasingly grotesque. The novel addresses themes of aestheticism, moral corruption, and the duality of human nature. Wilde's witty and extravagant prose, combined with the novel's exploration of complex philosophical ideas, makes 'The Picture of Dorian Gray' a classic of English literature.",
    date: "1890-06-20",
  },

  {
    id: "19",
    bookName: "Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    readBook: "https://www.gutenberg.org/files/28054/old/28054-pdf.pdf",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780374528379",
    description:
      "'The Brothers Karamazov', first published in 1880, is Fyodor Dostoevsky's final novel and is considered one of the greatest literary achievements of all time. The novel is a philosophical drama that delves into themes of faith, doubt, free will, and morality. It tells the story of the Karamazov family, particularly the conflicts between the father, Fyodor Pavlovich, and his three sons, Dmitri, Ivan, and Alexei. The novel explores the deep psychological and spiritual struggles of its characters, making it a profound and enduring work in world literature.",
    date: "1880-11-01",
  },
  {
    id: "20",
    bookName: "Middlemarch",
    author: "George Eliot",
    readBook: "https://www.gutenberg.org/cache/epub/145/pg145-images.html",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780141439549",
    description:
      "'Middlemarch', published in 1871-1872, is a novel by George Eliot (the pen name of Mary Ann Evans). The novel is set in a fictitious Midlands town during the early 19th century and explores the lives of its residents. The story intertwines several plots involving a large cast of characters, including the idealistic Dorothea Brooke and the ambitious Dr. Tertius Lydgate. 'Middlemarch' examines themes of marriage, idealism, political reform, education, and self-interest. It is celebrated for its rich characterization and intricate depiction of provincial life, making it one of the great novels of the Victorian era.",
    date: "1872-12-01",
  },
  {
    id: "21",
    bookName: "Sound & Fury",
    author: "William Faulkner",
    readBook:
      "https://antilogicalism.com/wp-content/uploads/2018/04/sound-and-fury.pdf",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780679732242",
    description:
      "'The Sound and the Fury', published in 1929, is a novel by American author William Faulkner. The novel is renowned for its complex narrative structure, divided into four sections, each with a different perspective and narrative style. It tells the tragic story of the Compson family, focusing on the personal and familial decline. Faulkner's innovative use of stream-of-consciousness, time shifts, and multiple perspectives creates a challenging yet profoundly impactful reading experience. The novel explores themes of memory, loss, and the passage of time, cementing its place as a landmark of American literature.",
    date: "1929-10-07",
  },
  {
    id: "22",
    bookName: "Great Expectations",
    author: "Charles Dickens",
    readBook: "https://www.gutenberg.org/files/1400/1400-h/1400-h.htm",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780141439563",
    description:
      "'Great Expectations', first published in serial form in 1860-1861, is a novel by Charles Dickens. It tells the story of Pip, an orphaned boy raised by his sister and her husband in the marshes of Kent. Pip's life changes dramatically when he is given the chance to rise above his humble beginnings thanks to an unknown benefactor. The novel explores themes of social class, ambition, and personal growth, and it is noted for its rich characters, including the eccentric Miss Havisham and the mysterious Magwitch. 'Great Expectations' is one of Dickens's most celebrated and enduring works.",
    date: "1861-08-01",
  },
  {
    id: "23",
    bookName: "Wuthering Heights",
    author: "Emily Bronte",
    readBook: "https://www.gutenberg.org/files/768/768-h/768-h.htm",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780141439556",
    description:
      "'Wuthering Heights', published in 1847, is the only novel by Emily Bronte. The story is set on the Yorkshire moors and revolves around the turbulent and passionate relationship between Heathcliff, an orphan taken in by the Earnshaw family, and Catherine Earnshaw. The novel is noted for its dark, gothic atmosphere and its exploration of themes such as revenge, social class, and the destructiveness of obsessive love. Despite initial mixed reviews, 'Wuthering Heights' has come to be regarded as a classic of English literature and one of the greatest novels ever written.",
    date: "1847-12-01",
  },
  {
    id: "24",
    bookName: "Invisible Man",
    author: "Ralph Ellison",
    readBook:
      "https://www.gutenberg.org/files/5230/5230-h/5230-h.htm",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780679732761",
    description:
      "'Invisible Man', published in 1952, is a novel by Ralph Ellison. The novel addresses many of the social and intellectual issues facing African Americans in the early 20th century, including black nationalism, the relationship between black identity and Marxism, and the reformist racial policies of Booker T. Washington. The story is told in the first person by an unnamed protagonist, who considers himself socially invisible. Ellison's use of the protagonist's journey of self-discovery to critique the structures of racism and marginalization in American society has cemented 'Invisible Man' as a seminal work in American literature.",
    date: "1952-04-14",
  },
  {
    id: "25",
    bookName: "Frankenstein",
    author: "Mary Shelley",
    readBook: "https://www.gutenberg.org/files/84/84-h/84-h.htm",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780141439471",
    description:
      "'Frankenstein', or 'The Modern Prometheus', published in 1818, is a novel by Mary Shelley. The story tells the tale of Victor Frankenstein, a scientist who creates a sentient creature through an unorthodox scientific experiment. The creature, often mistakenly referred to as 'Frankenstein', seeks acceptance and companionship but is met with fear and hatred by everyone he encounters, leading to a series of tragic events. The novel explores themes of ambition, hubris, and the quest for knowledge, as well as the ethical and moral implications of scientific advancement. 'Frankenstein' is considered one of the earliest examples of science fiction and remains a cornerstone of gothic literature.",
    date: "1818-01-01",
  },

  {
    id: "26",
    bookName: "Crime & Punishment",
    author: "Fyodor Dostoevsky",
    readBook: "https://www.gutenberg.org/files/2554/2554-h/2554-h.htm",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780143107637",
    description:
      "'Crime and Punishment', first published in 1866, is a novel by Fyodor Dostoevsky. The novel focuses on the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who formulates and executes a plan to kill an unscrupulous pawnbroker for her money. As he deals with the consequences of his actions, he grapples with guilt, paranoia, and the idea of redemption. Dostoevsky's exploration of the psychological and philosophical aspects of crime and punishment makes this novel a profound and compelling read.",
    date: "1866-01-01",
  },
  {
    id: "27",
    bookName: "Jane Eyre",
    author: "Charlotte Bronte",
    readBook: "https://www.ucm.es/data/cont/docs/119-2014-04-09-Jane%20Eyre.pdf",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780141441146",
    description:
      "'Jane Eyre', first published in 1847, is a novel by English writer Charlotte Bronte. The novel follows the experiences of its eponymous heroine, including her growth to adulthood and her love for Mr. Rochester, the brooding master of Thornfield Hall. The narrative explores themes of class, sexuality, religion, and feminism, making it a pioneering text in the context of its time. Jane Eyre's strong moral and spiritual development has resonated with readers for generations, securing its place as a beloved classic of English literature.",
    date: "1847-10-16",
  },
  {
    id: "28",
    bookName: "1984",
    author: "George Orwell",
    readBook: "https://rauterberg.employee.id.tue.nl/lecturenotes/DDM110%20CAS/Orwell-1949%201984.pdf",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780451524935",
    description:
      "'1984', published in 1949, is a dystopian novel by George Orwell. The novel is set in a totalitarian society ruled by the Party and its leader, Big Brother. The protagonist, Winston Smith, works at the Ministry of Truth, where he alters historical records to fit the Party's propaganda. As Winston becomes disillusioned with the Party, he begins to rebel, leading to tragic consequences. Orwell's chilling depiction of a world where freedom and truth are suppressed remains a powerful warning about the dangers of totalitarianism.",
    date: "1949-06-08",
  },
  {
    id: "29",
    bookName: "The Odyssey",
    author: "Homer",
    readBook: "https://www.gutenberg.org/files/1399/1399-h/1399-h.htm",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780140268869",
    description:
      "'The Odyssey', attributed to the ancient Greek poet Homer, is an epic poem that dates back to the 8th century BC. The poem follows the Greek hero Odysseus and his journey home after the fall of Troy. It is renowned for its adventurous narrative, complex characters, and exploration of themes such as heroism, loyalty, and perseverance. The Odyssey is not only a cornerstone of ancient Greek literature but also a foundational text in the Western literary canon.",
    date: "800-01-01",
  },
  {
    id: "30",
    bookName: "Anna Karenina",
    author: "Leo Tolstoy",
    readBook: "https://www.gutenberg.org/files/1399/1399-h/1399-h.htm",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780143035008",
    description:
      "'Anna Karenina', first published in 1877, is a novel by Leo Tolstoy. The novel tells the tragic story of Anna Karenina, a beautiful and aristocratic woman who falls in love with the dashing Count Vronsky, leading to her social ostracism and eventual downfall. Parallel to Anna's story is that of Konstantin Levin, a landowner who struggles to find meaning in his life and work. Tolstoy's rich portrayal of Russian society and his exploration of themes such as love, family, and faith have made 'Anna Karenina' a masterpiece of world literature.",
    date: "1877-01-01",
  },
  {
    id: "31",
    bookName: "Madame Bovary",
    author: "Gustave Flaubert",
    readBook: "https://www.gutenberg.org/files/2413/2413-h/2413-h.htm",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780140449129",
    description:
      "'Madame Bovary', first published in 1857, is a novel by Gustave Flaubert. The novel is a critical portrayal of the provincial bourgeoisie and tells the story of Emma Bovary, an unfulfilled farmer's wife who seeks passion and excitement in a series of adulterous affairs. Flaubert's meticulous prose and his unflinching examination of Emma's desires and disillusionments make 'Madame Bovary' a landmark in literary realism. The novel's themes of romantic idealism and societal constraints continue to resonate with readers today.",
    date: "1857-04-15",
  },
  {
    id: "32",
    bookName: "Dorian Gray",
    author: "Oscar Wilde",
    readBook: "https://www.gutenberg.org/files/174/174-h/174-h.htm",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780141439570",
    description:
      "'The Picture of Dorian Gray', first published in 1890, is a novel by Oscar Wilde. The story revolves around a young man named Dorian Gray, who remains eternally youthful while a portrait of him ages and reveals the corruption of his soul. The novel explores themes of vanity, moral duplicity, and the consequences of living a life of hedonism. Wilde's wit and his critique of the decadent lifestyle make this novel a compelling and thought-provoking read.",
    date: "1890-06-20",
  },
  {
    id: "33",
    bookName: "The BK",
    author: "Fyodor Dostoevsky",
    readBook: "https://www.holybooks.com/wp-content/uploads/The-Brothers-Karamazov.pdf",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780140449242",
    description:
      "'The Brothers Karamazov', first published in 1880, is a novel by Fyodor Dostoevsky. It is a passionate philosophical novel set in 19th-century Russia that enters deeply into the ethical debates of God, free will, and morality. It is a spiritual drama of moral struggles concerning faith, doubt, and reason, set against a modernizing Russia. Dostoevsky's last novel is often considered his magnum opus and one of the supreme achievements in world literature.",
    date: "1880-01-01",
  },
  {
    id: "34",
    bookName: "Wuthering Heights",
    author: "Emily Bronte",
    readBook: "https://wuthering-heights.co.uk/novel/html/index",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780141439556",
    description:
      "'Wuthering Heights', first published in 1847, is a novel by Emily Bronte. The narrative centers around the intense and destructive love between Catherine Earnshaw and Heathcliff, a foundling adopted by Catherine’s father. Their relationship is a tumultuous journey of passion, revenge, and the supernatural. The novel’s intricate structure, spanning two generations, and its exploration of themes like the nature of love and the effects of jealousy, have made it a classic of English literature.",
    date: "1847-12-01",
  },
  {
    id: "35",
    bookName: "Frankenstein",
    author: "Mary Shelley",
    readBook: "https://www.gutenberg.org/files/84/84-h/84-h.htm",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780141439471",
    description:
      "'Frankenstein', first published in 1818, is a novel by Mary Shelley. The story follows Victor Frankenstein, a young scientist who creates a grotesque creature in an unorthodox scientific experiment. The novel explores themes of ambition, hubris, and the quest for knowledge, as well as the ethical and moral implications of playing God. Shelley’s work is often considered the first science fiction novel and continues to be a powerful tale about the dangers of scientific overreach.",
    date: "1818-01-01",
  },
  {
    id: "36",
    bookName: "Les Misérables",
    author: "Victor Hugo",
    readBook: "https://freeclassicebooks.com/Victor%20Hugo/Les%20Miserables.pdf",
    imageUrl: "https://images.penguinrandomhouse.com/cover/9780451419439",
    description:
      "'Les Misérables', first published in 1862, is a novel by Victor Hugo. The story is set in early 19th-century France and follows the lives and interactions of several characters, particularly the struggles of ex-convict Jean Valjean and his quest for redemption. The novel addresses themes such as justice, love, and the impact of the French Revolution. Hugo’s rich narrative and social commentary have made 'Les Misérables' a timeless classic.",
    date: "1862-01-01",
  },
 

];

export default infoArr;
