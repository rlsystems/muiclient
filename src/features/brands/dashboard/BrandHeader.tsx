import { Box, Typography } from "@mui/material";


export default function BrandHeader() {



    return (
        <Box sx={{ mb: 5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h4" gutterBottom>
                        Brands
                    </Typography>
                </Box>

                <Box sx={{ flexShrink: 0 }}>Button</Box>
            </Box>

            
        </Box>

    )
}