

TIDY BLOODY CODEBASE
- start new and move thinggs over peice by peice?
- use image provider, look at alternatives to my images.jsx
- make 'chalet' component
    - pass in chalet object
        - name
        - image
        - description
        - link to book
        - link to contact - social bar - component -- footer??
    - render out the details


find some fonts!!
- https://fonts.google.com/


??? WHAT IS MVP FOR PARENTS ???

GET RID OF MENU?
- put important things you can get more info out of on landing
- dont wanna be able to go forward / back more than 5 tmes??

- our chalets
    - gala
    - braeburn
    - honeycrisp
- contact us
    - info
- local info
    - map 


- itemise priorities 
- bosh out 
    - make good use of theme provider
    - make use of image provider 
    - rename chalets to lodges
    - 

GET STYLING DONE FOR A BASE TO SHOW RENTS AND WORK OFF
- fonts
- colour scheme
- feel - e.g. texture of cards
- interactivity - swipe? smooth feel to navigating through


1 . contact us 
2 . chatlets
3 . location 
4 . things to do around / extra info

what is in menu? 
- our chalets
- contact us 
+ 2 +


landing
- our chalets
- contact us 



 const [selectedImageIndex, setSelectedImageIndex] = useState(null); // Add state


    const images = [
        { type: 'image', src: zero, alt: 'Placeholder Image 1' },
        { type: 'image', src: one, alt: 'Placeholder Image 1' },
        { type: 'image', src: two, alt: 'Placeholder Image 1' },
        { type: 'image', src: three, alt: 'Placeholder Image 1' },
    ];
    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
    };


    return (
        <ThemeProvider theme={theme}>
            <img src={sky} alt="Background" className="background-image" />
            {/* <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', marginBottom: '20px' }}>   */}

            <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', margin: '20px', textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>
                
                <Typography component="h1" p={2} variant="h3"
                        style={theme.typography.luxuryTitle}
                        textAlign={"center"} >
                            Gala
                        </Typography>
            </Paper>
            <Box sx={{ p: 2, overflowX: 'auto', whiteSpace: 'nowrap', display: 'flex', gap: 2, height: '300px' }}>
                <Paper  style={{borderRadius: "20px"}}>
                    
                    <SwipeableContent contentItems={images} />

                </Paper>
            </Box>





    return (
        <ThemeProvider theme={theme}>
            <img src={sky} alt="Background" className="background-image" />
            <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', margin: '20px', textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>

            {/* <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', margin: '20px', textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}> */}
                <Typography component="h1" p={2} variant="h3"
                    style={theme.typography.luxuryTitle}
                    textAlign={"center"} >
                    Gala
                </Typography>
            </Paper>

            <Box sx={{ p: 2, position: 'relative', height: '300px' }}>
                <Paper style={{ 
                    borderRadius: "20px",
                    height: '100%',
                    overflow: 'hidden',
                    position: 'relative'
                }}>
                    <Box sx={{
                        display: 'flex',
                        transition: 'transform 0.5s ease',
                        transform: `translateX(-${currentImageIndex * 100}%)`,
                        height: '100%'
                    }}>
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                style={{
                                    minWidth: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        ))}
                    </Box>
                    
                    {/* Navigation arrows */}
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: 0,
                        right: 0,
                        display: 'flex',
                        justifyContent: 'space-between',
                        transform: 'translateY(-50%)',
                        px: 2
                    }}>
                        <IconButton onClick={prevImage} sx={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.3)' }}>
                            <ChevronRightIcon />
                        </IconButton>
                        <IconButton onClick={nextImage} sx={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.3)' }}>
                            <ChevronRightIcon />
                        </IconButton>
                    </Box>
                </Paper>
            </Box>
            <Paper elevation={9} style={{ borderRadius: "20px", padding: '20px', margin: '20px' }}
                onClick={() => { navigate("/gala") }}
            >
                <Typography p={2} variant="h5" component="h1" style={theme.typography.junge} textAlign={"center"}>
About Gala                    </Typography>
                <Typography p={2} variant="body1" component="h1" style={theme.typography.junge} textAlign={"center"}>
                Gala Lodge is a charming chalet nestled in the heart of Wales. Surrounded by lush greenery and rolling hills, this cozy retreat offers the perfect blend of tranquility and adventure. With its rustic charm and modern amenities, Gala Lodge is the ideal getaway for those seeking a relaxing escape from the hustle and bustle of city life.
                </Typography>
            </Paper>

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, p: 2 }}>
            {images.map((image, index) => (
                <Paper key={index} elevation={9} sx={{ borderRadius: '20px', overflow: 'hidden', cursor: 'pointer' }}>
                    <img src={image.src} alt={image.alt} style={{ width: '100%', borderRadius: '20px' }} onClick={() => handleImageClick(index)} />
                </Paper>
            ))}
        </Box>
        
        {selectedImageIndex !== null && (
            <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
                <img src={images[selectedImageIndex].src} alt={images[selectedImageIndex].alt} style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '20px' }} />
                <Box sx={{ position: 'absolute', top: 50, right: 50, cursor: 'pointer' }} onClick={() => setSelectedImageIndex(null)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19 13H5v-2h14v2z" />
                        <path fill="currentColor" d="M19 13h-4v-2h4v2z" />
                        <path fill="currentColor" d="M19 13h-4v-2h4v2z" />
                    </svg>
                </Box>
                <Box sx={{ position: 'absolute', bottom: 50, left: 50, cursor: 'pointer' }} onClick={() => setSelectedImageIndex(selectedImageIndex - 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M15.41 16.59L10.83 12l4.58-4.59L14 10l-6 6l6 6l0.59-0.59L10.83 12z" />
                    </svg>
                </Box>
                <Box sx={{ position: 'absolute', bottom: 50, right: 50, cursor: 'pointer' }} onClick={() => setSelectedImageIndex(selectedImageIndex + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M8.59 16.59L13.17 12l-4.58-4.59L10 10l6 6l-6 6l0.59-0.59L13.17 12z" />
                    </svg>
                </Box>
            </Box>
        )}

        </ThemeProvider>
    );
}
